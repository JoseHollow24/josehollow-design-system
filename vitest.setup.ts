/// <reference types="vitest/globals" />
import { setProjectAnnotations } from 'storybook/internal/preview-api';
// @ts-ignore — el preview.js no tiene tipos declarados
import * as projectAnnotations from './.storybook/preview';

const project = setProjectAnnotations([projectAnnotations as never]);

beforeAll(project.beforeAll);
