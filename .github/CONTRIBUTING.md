# Welcome to Spaceship contributing guide

Thank you for your interest in contributing to Spaceship(📖 Mini Wikipedia for computer science students.)!

Your contributions help improve the quality of content and provide valuable knowledge to computer science students. Before you get started, please take a moment to read through this contribution guide to ensure a smooth and efficient collaboration process.

## Getting Started

1. **Fork the Repository**: Start by forking the repository to your GitHub account using the "Fork" button at the top right corner of the repository page.

2. **Clone the Repository**: Clone your forked repository to your local development environment using the following command:

   ```bash
   git clone https://github.com/your-username/your-forked-repo.git
   ```

3. **Install Dependencies**: Make sure you have [Node.js](https://nodejs.org/). Then, navigate to the project's directory and install the required dependencies:

   ```bash
   cd your-forked-repo
   npm install
   ```

4. **Start the Development Server**: To see the documentation locally and preview your changes, run the development server:

   ```bash
   npm start
   ```

   The documentation will be available at `http://localhost:3000`.

## Making Contributions

1. **Branch**: Create a new branch for your changes. Use a descriptive name that reflects the nature of your work.

   ```bash
   git checkout -b feature/add-new-guide
   ```

2. **Make Changes**: Make the necessary changes to the Markdown guides, code samples, or any other relevant files.

3. **Testing**: Before submitting your changes, make sure to test the documentation locally by running the development server and verifying that your changes look and work as expected.

4. **Commit**: Commit your changes with a clear and concise commit message. It's important to provide details about the changes you made.

   ```bash
   git add .
   git commit -m "feat: add new guide on XYZ topic"
   ```

5. **Push**: Push your changes to your forked repository on GitHub.

   ```bash
   git push origin feature/add-new-guide
   ```

6. **Create Pull Request**: Go to your forked repository on GitHub and click on the "New Pull Request" button. Fill in the necessary information and describe your changes in the pull request. Reference any related issues if applicable.

7. **Review Process**: The maintainers of the project will review your pull request. They may suggest changes or improvements, or ask questions if needed. Be responsive and open to feedback to facilitate the review process.

8. **Merge**: Once your pull request is approved and any conflicts are resolved, it will be merged into the main repository.

**Your PR is merged! 🥳**
Congratulations 🎉🎉 The Spaceship team thanks you ✨.

Once your PR is merged, your contributions will be publicly visible on the [Spaceship](https://spaceship.roadtocode.org/).

## Code Style and Guidelines

To maintain consistency across the documentation, please adhere to the following guidelines:

- Use Markdown for all documentation files.
- Follow the established formatting and styling of existing guides.
- Keep paragraphs and sentences concise and easy to understand.
- Include code samples where appropriate to illustrate concepts.
- Use headings and subheadings to organize content effectively.
- Use inline code formatting for code snippets, e.g., `const variable = "value"`.
- If you encounter any specific guidelines or conventions within the project, be sure to follow them.

## Feedback and Help

If you have any questions, encounter issues, or need assistance with the contribution process, don't hesitate to reach out to us. You can open an issue on the GitHub repository, leave comments on the pull request, or contact us through other communication channels specified in the project.

We greatly appreciate your contributions and look forward to working with you to improve our documentation and help our users better understand our project!
