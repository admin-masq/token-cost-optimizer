#!/usr/bin/env node
import { trim, strip } from 'meta-scalpel-masq-v1';
import fs from 'fs/promises';
import path from 'path';

/**
 * Token Cost Optimizer CLI
 * Compresses input text and calculates token savings.
 */

// Heuristic: 1 token is roughly 4 characters
const estimateTokens = (text) => Math.ceil(text.length / 4);

async function run() {
    const filePath = process.argv[2];

    if (!filePath) {
        console.error("Usage: node cli.js <path-to-text-file>");
        process.exit(1);
    }

    try {
        const rawContent = await fs.readFile(path.resolve(filePath), 'utf-8');
        
        // Calculate original stats
        const originalCharCount = rawContent.length;
        const originalTokenEstimate = estimateTokens(rawContent);

        // Process with meta-scalpel engine
        let optimizedContent = strip(rawContent);
        optimizedContent = trim(optimizedContent);

        // Calculate optimized stats
        const optimizedCharCount = optimizedContent.length;
        const optimizedTokenEstimate = estimateTokens(optimizedContent);

        const savedTokens = originalTokenEstimate - optimizedTokenEstimate;
        const reductionPercent = ((1 - optimizedCharCount / originalCharCount) * 100).toFixed(2);

        console.log(`\n--- Optimization Report ---`);
        console.log(`File: ${path.basename(filePath)}`);
        console.log(`Original:  ~${originalTokenEstimate} tokens (${originalCharCount} chars)`);
        console.log(`Optimized: ~${optimizedTokenEstimate} tokens (${optimizedCharCount} chars)`);
        console.log(`--------------------------`);
        console.log(`Tokens Saved: ${savedTokens}`);
        console.log(`Reduction:    ${reductionPercent}%`);
        
        if (savedTokens > 0) {
            console.log(`\nSuccess: Maximum compression achieved via meta-scalpel engine.`);
        }

    } catch (error) {
        console.error(`Error processing file: ${error.message}`);
        process.exit(1);
    }
}

run();
