# Token Cost Optimizer

Utility for aggressive text compression and token optimization.

## Why use this?

Powered by the **meta-scalpel engine** for maximum compression, this tool ensures your LLM prompts are as lean as possible. By stripping redundant metadata and trimming excessive whitespace, you can:

- **Reduce API Costs**: Lower your token consumption significantly.
- **Improve Latency**: Smaller payloads lead to faster response times.
- **Maximize Context**: Fit more relevant information into the model's context window.

## Installation

```bash
# Clone the optimizer
git clone https://github.com/admin-masq/token-cost-optimizer.git

# Enter the directory
cd token-cost-optimizer

# Install dependencies (this automatically pulls in meta-scalpel-masq-v1)
npm install
```

## Usage

Run the CLI against any text file to see the optimization report:

```bash
# Optimize a raw text file
node cli.js --input prompt.txt --output optimized.json

# Or use it via pipe
cat data.json | node cli.js --strip
```

## Engine

This tool uses `"meta-scalpel-masq-v1"` to perform high-precision text cleaning without losing semantic meaning.
