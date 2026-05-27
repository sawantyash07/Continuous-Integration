# JavaScript Project with Jest

A modern JavaScript project configured with Jest for comprehensive unit testing.

## Project Structure

```
├── src/                 # Source code files
│   └── math.js         # Example utility module
├── __tests__/          # Test files
│   └── math.test.js    # Example tests
├── jest.config.js      # Jest configuration
├── package.json        # Project dependencies and scripts
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

Install project dependencies:

```bash
npm install
```

## Running Tests

Run all tests:

```bash
npm test
```

Run tests in watch mode (re-run on file changes):

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

## Writing Tests

Test files should be placed in the `__tests__` directory or follow the naming convention `*.test.js` or `*.spec.js`.

Example test:

```javascript
const { add } = require('../src/math');

describe('Math utilities', () => {
  test('should add two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
});
```

## Jest Configuration

The Jest configuration is defined in `jest.config.js` and includes:

- **testEnvironment**: Node.js environment
- **testMatch**: Patterns for test file discovery
- **collectCoverageFrom**: Source files to include in coverage reports
- **coverageDirectory**: Coverage report output directory

## Development

- Add source files to the `src/` directory
- Add corresponding test files to the `__tests__/` directory
- Run tests frequently during development with `npm run test:watch`

## License

ISC
