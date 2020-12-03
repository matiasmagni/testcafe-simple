import { Selector } from 'testcafe';

// Fixture serves as the name of our feature.
// Think of it as the describe hook in mocha
// page() opens the test URL on your browser of choice
fixture('TestCafe example page').page(
  'https://devexpress.github.io/testcafe/example/'
);

test("User submits his personal data successfully", async user => {
  // To interact with a DOM element, we must use the Selector function
  const interfaceSelect = Selector('#preferred-interface');
  const interfaceOption = interfaceSelect.find('option');

  await user
    .typeText('#developer-name', 'Marie')
    .click('#remote-testing')
    .click(interfaceSelect)
    .click(interfaceOption.withText('Both'))
    .expect(interfaceSelect.value)
    .eql('Both')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText)
    .eql('Thank you, Marie!');
});
