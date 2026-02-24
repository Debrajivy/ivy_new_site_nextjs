/**
 * AIHelpCenter data aggregator.
 *
 * Imports all per-category JSON files from content/ and assembles the same
 * `data.categories` shape that the page components consume.
 *
 * Two things are computed automatically so you never need to maintain them manually:
 *  1. `count` on every subcategory and category (actual article count)
 *  2. `latestTopic` on every category (most recently dated article, drives landing-page badge)
 *
 * To add articles: edit the relevant content/<category-id>.json file.
 * To add a new category: add a content/<id>.json file AND register it below.
 */

import pythonBasics from '../content/python-basics.json';
import machineLearning from '../content/machine-learning.json';
import visualization from '../content/visualization.json';
import sqlDb from '../content/sql-db.json';
import career from '../content/career.json';
import genaiLlm from '../content/genai-llm.json';
import mlops from '../content/mlops.json';
import dataEngineering from '../content/data-engineering.json';
import aiStrategyPm from '../content/ai-strategy-pm.json';
import aiGovernance from '../content/ai-governance.json';
import copilotM365 from '../content/copilot-m365.json';
import microsoftPowerPlatforms from '../content/microsoft-power-platforms.json';
import dataStoryTelling from '../content/data-story-telling.json';
import genaiUseCases from '../content/genai-use-cases.json';
import aiForProductManagers from '../content/ai-for-product-managers.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function enrich(raw: any) {
  const enriched = { ...raw };

  let categoryTotal = 0;
  const allTopics: any[] = [];

  if (enriched.subcategories) {
    const subcats: Record<string, any> = {};
    for (const [key, subcat] of Object.entries(enriched.subcategories) as [string, any][]) {
      const topics: any[] = subcat.topics ?? [];
      const n = topics.length;
      subcats[key] = {
        ...subcat,
        count: `${n} Tutorial${n !== 1 ? 's' : ''}`,
      };
      categoryTotal += n;
      allTopics.push(...topics);
    }
    enriched.subcategories = subcats;
  }

  enriched.count = `${categoryTotal} Tutorial${categoryTotal !== 1 ? 's' : ''}`;

  // Auto-detect the most recently dated article for the landing page badge.
  // Dates are stored as "Month D, YYYY" strings (e.g., "January 13, 2026").
  allTopics.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  enriched.latestTopic = allTopics[0] ?? null;

  return enriched;
}

export const data = {
  categories: {
    'python-basics': enrich(pythonBasics),
    'machine-learning': enrich(machineLearning),
    'visualization': enrich(visualization),
    'sql-db': enrich(sqlDb),
    'career': enrich(career),
    'genai-llm': enrich(genaiLlm),
    'mlops': enrich(mlops),
    'data-engineering': enrich(dataEngineering),
    'ai-strategy-pm': enrich(aiStrategyPm),
    'ai-governance': enrich(aiGovernance),
    'copilot-m365': enrich(copilotM365),
    'microsoft-power-platforms': enrich(microsoftPowerPlatforms),
    'data-story-telling': enrich(dataStoryTelling),
    'genai-use-cases': enrich(genaiUseCases),
    'ai-for-product-managers': enrich(aiForProductManagers),
  },
};
