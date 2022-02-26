/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {MariposaSelfAssessment} from '../mariposa-self-assessment.js';

import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('mariposa-self-assessment', () => {
  test('is defined', () => {
    const el = document.createElement('mariposa-self-assessment');
    assert.instanceOf(el, MariposaSelfAssessment);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<mariposa-self-assessment></mariposa-self-assessment>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<mariposa-self-assessment name="Test"></mariposa-self-assessment>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = (await fixture(html`<mariposa-self-assessment></mariposa-self-assessment>`)) as MariposaSelfAssessment;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });

  test('styling applied', async () => {
    const el = (await fixture(html`<mariposa-self-assessment></mariposa-self-assessment>`)) as MariposaSelfAssessment;
    await el.updateComplete;
    assert.equal(getComputedStyle(el).paddingTop, '16px');
  });
});
