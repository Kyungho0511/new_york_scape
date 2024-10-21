import { FOOTBAR_HEIGHT } from "./Footbar";
import styles from "./LegendSection.module.css";
import React from "react";

type LegendSectionProps = {
  children: React.ReactNode;
  title?: string;
  steps?: number[];
  currentStep?: number;
}

/**
 * Container component to display the legend of the current analysis.
 */
export default function LegendSection({ children, title, steps, currentStep }: LegendSectionProps) {

  return (
    <div
      className={styles.container}
      style={{ maxHeight: `calc(100vh - ${FOOTBAR_HEIGHT}px - 5rem)` }}
    >
      <div className={styles.header}>
        {title && <h4 className={styles.title}>{title}</h4>}
        {steps &&
          steps.map((step, index) => (
            <div
              className={`${styles.step_icon} ${step === currentStep && styles.current}`}
              key={index}
            >
              {step}
            </div>
          ))}
      </div>
      {children}
    </div>
  );
}