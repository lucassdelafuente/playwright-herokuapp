import { expect, test } from '@fixtures/fixturesBuilder';

test.describe('Entry ad option feature', () => {
  test.beforeEach(async ({ entryAdPage }) => {
    await entryAdPage.goToEntryAdPage();
  });

  test('The Modal title should be "This is a modal window"', async ({
    entryAdPage,
  }) => {
    const expectedText: string = 'This is a modal window';

    await expect(entryAdPage.modalTitle).toContainText(expectedText, {
      ignoreCase: true,
    });
  });
});
