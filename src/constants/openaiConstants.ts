import { Section } from "../services/navigate";
import { Cluster } from "./clusterConstants";

type textPrompt = {type: "text", content: string};
type sectionPrompt = {type: "section", content: Section}; 
type clusterPrompt = {type: "cluster", content: Cluster[]};
export type Prompt = textPrompt | sectionPrompt | clusterPrompt

// Prompt presets to get instruction for each page from openAI.
const presetPrefix: string = "rephrase the next paragraph:";
export const promptPresets: {[key in Section]: string} = {
  "home": `${presetPrefix} Hi, I am a site analysis agent to deliver site candidates based on your preferences. Tell us about your life-style by selecting the categories important for your new home. We will tell you about NYC neighborhoods that suit your household the best. Tell us about your life-style by selecting the categories important for your new home. We will tell you about NYC neighborhoods that suit your household the best. Tell us about your life-style by selecting the categories important for your new home. We will tell you about NYC neighborhoods that suit your household the best. Tell us about your life-style by selecting the categories important for your new home. We will tell you about NYC neighborhoods that suit your household the best.`,
  "explore": `${presetPrefix} Explore datasets of shortage areas by comparing target data on shortages with other secondary data. Add or remove datasets as needed for the clustering analysis of healthcare shortages. Once you are finished, click the 'Continue' button.`,
  "cluster": `${presetPrefix} Add or remove features to customize your clustering analysis. Click the 'Cluster' button when you are ready. Review the subcategory values for each cluster in the legend. Exclude the clusters you're not targeting, and continue.`,
  "report": `${presetPrefix} Generate a report based on the clustering analysis. Click the 'Generate Report' button when you are ready. Review the report and download it as a PDF.`,
};