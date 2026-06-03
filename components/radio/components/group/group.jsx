import { c, useRef, useEffect } from 'atomico';
import { useSlot } from '@atomico/hooks/use-slot';

const Component = () => {
  const slotRef = useRef();
  const slots = useSlot(slotRef);

  const methods = {
    checkSlot: (slotList) => (slot) => {
      const slotListener = slot;
      slotList.forEach((s) => { s.checked = false; });
      slotListener.checked = true;
      return slotListener;
    },
    previewSlot: (slotList) => (slot, index) => {
      if (index === 0) return slot;
      slotList.forEach((s, i) => {
        if (!s.disabled) s.focus = i === index - 1;
      });
      return slot;
    },
    nextSlot: (slotList) => (slot, index) => {
      if (slotList.length === index) return slot;
      slotList.forEach((s, i) => {
        if (!s.disabled) s.focus = i === index + 1;
      });
      return slot;
    },
  };

  useEffect(() => {
    const filtered = slots.filter((s) => s.nodeName === 'DSH-RADIO');
    filtered.forEach((slot, index) => {
      slot.addEventListener('onClick', () => methods.checkSlot(filtered)(slot));
      slot.addEventListener('onArrowUp', () => methods.previewSlot(filtered)(slot, index));
      slot.addEventListener('onArrowDown', () => methods.nextSlot(filtered)(slot, index));
      slot.addEventListener('onArrowRight', () => methods.nextSlot(filtered)(slot, index));
      slot.addEventListener('onArrowLeft', () => methods.previewSlot(filtered)(slot, index));
    });
    return () => {
      filtered.forEach((slot, index) => {
        slot.removeEventListener('onClick', () => methods.checkSlot(filtered)(slot));
        slot.removeEventListener('onArrowUp', () => methods.previewSlot(filtered)(slot, index));
        slot.removeEventListener('onArrowDown', () => methods.nextSlot(filtered)(slot, index));
        slot.removeEventListener('onArrowRight', () => methods.nextSlot(filtered)(slot, index));
        slot.removeEventListener('onArrowLeft', () => methods.previewSlot(filtered)(slot, index));
      });
    };
  }, [slots]);

  return (
    <host shadowDom>
      <slot ref={slotRef}></slot>
    </host>
  );
};

export const RadioGroup = c(Component);
export const radioGroupName = 'dsh-radio-group';
