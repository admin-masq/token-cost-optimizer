# Token Cost Optimizer

Utility for aggressive text compression and token optimization.

## Why use this?

Powered by the **meta-scalpel engine** for maximum compression, this tool ensures your LLM prompts are as lean as possible. By stripping redundant metadata and trimming excessive whitespace, you can:

- **Reduce API Costs**: Lower your token consumption significantly.
- **Improve Latency**: Smaller payloads lead to faster response times.
- **Maximize Context**: Fit more relevant information into the model's context window.

## Installation

```bash
npm install
```

## Usage

Run the CLI against any text file to see the optimization report:

```bash
node cli.js path/to/your/input.txt
```

## Engine

This tool uses `meta-scalpel-masq-v1` to perform high-precision text cleaning without losing semantic meaning.
