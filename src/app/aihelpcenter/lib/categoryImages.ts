import type { StaticImageData } from "next/image";

import aiGovernance from "../../../assests/ai-goverance.jpeg";
import aiStrategy from "../../../assests/ai-strategy.jpeg";
import aiProductManagement from "../../../assests/aipm.jpeg";
import career from "../../../assests/career.jpeg";
import copilot from "../../../assests/copilot.jpeg";
import dataEngineering from "../../../assests/data-engineering.jpeg";
import dataStorytelling from "../../../assests/data-story.jpeg";
import genAiLlm from "../../../assests/genai-llm.jpeg";
import genAiUseCases from "../../../assests/genaifor.jpeg";
import microsoftPowerPlatforms from "../../../assests/microsoft.jpeg";
import machineLearning from "../../../assests/ml.jpeg";
import mlOps from "../../../assests/mlops.jpeg";
import pythonBasics from "../../../assests/pb.jpeg";
import sql from "../../../assests/sql.jpeg";
import visualization from "../../../assests/vs.jpeg";

export const categoryImages: Record<string, StaticImageData> = {
  "python-basics": pythonBasics,
  "machine-learning": machineLearning,
  visualization,
  "sql-db": sql,
  career,
  "genai-llm": genAiLlm,
  mlops: mlOps,
  "data-engineering": dataEngineering,
  "ai-strategy-pm": aiStrategy,
  "ai-governance": aiGovernance,
  "copilot-m365": copilot,
  "microsoft-power-platforms": microsoftPowerPlatforms,
  "data-story-telling": dataStorytelling,
  "genai-use-cases": genAiUseCases,
  "ai-for-product-managers": aiProductManagement,
};
