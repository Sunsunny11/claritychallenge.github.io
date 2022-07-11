import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Mermaid } from "mdx-mermaid/Mermaid";

function ContactHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"> The Clarity Project </h1>{" "}
        <p className="hero__subtitle"> The Project Timeline </p>{" "}
        <div className={styles.buttons}> </div>{" "}
      </div>{" "}
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <ContactHeader />
        <Paper sx={{ p: 4, m: 6 }}>
          <h2>The Challenges</h2>
          <Typography variant="h6">
            The project is running three rounds of enhancement and prediction
            challenges.
            <p />
            <ul>
              <li>
                {" "}
                CEC1/CPC1, 2021-2022 - Simple indoor scenes, one interferer
              </li>
              <li>
                {" "}
                CEC2/CPC2, 2022-2023 - Complex indoor scenes, multiple
                interferers, head motion
              </li>
              <li>
                {" "}
                CEC3/CPC3, 2023-2024 - Dynamic outdoor scenes, moving sources,
                head motion
              </li>
            </ul>
            We are currently in the participation phase of the 2nd enhancement
            challenge (CEC2).
            <p />
          </Typography>
        </Paper>

        <Paper sx={{ p: 4, m: 6 }}>
          <h2>The Overal Schedule</h2>
          The tentative schedule for future challenges is shown below.
          <Mermaid
            chart={`gantt
            dateFormat  YYYY-MM-DD
            title Clarity Challenge Overview Schedule
            excludes weekdays 2014-01-10
            
            section CEC1
            Participation Phase            : done,    2021-02-01, 2021-06-15
            Evaluation Phase               : done, 2021-06-15, 2021-09-17 
            section CPC1
            Participation Phase              :done,         2021-11-16, 2022-03-21
            Evaluation Phase               :done,        2022-03-21,2022-06-29
            section CEC2
            Participation Phase               :active,         2022-03-30, 2022-09-01
            Evaluation Phase               :         2022-09-01,2022-12-02
            section CPC2
            Participation Phase               :         2023-02-01, 2023-08-01
            Evaluation Phase               :         2023-08-01, 2023-08-25
            section CEC3
            Participation Phase               :         2023-06-01, 2024-01-01
            Evaluation Phase               :         2024-01-01,2024-04-01
            section CPC3
            Participation Phase               :         2024-04-01, 2024-09-01
            Evaluation Phase               :         2024-09-01,2024-11-01`}
          />
        </Paper>

        <Paper sx={{ p: 4, m: 6 }}>
          <h2>The 2nd Clarity Enhancement Challenge (CEC2)</h2>
          <Mermaid
            chart={`gantt
            dateFormat  YYYY-MM-DD
            title CEC2 Schedule

            section CEC2
            Participation Phase             :active,         2022-03-30, 2022-09-01
            Challenge details + rules published :milestone, 2022-03-30, 1min
            Dev/Training data released :milestone, 2022-04-14, 1min
            Complete baseline released :milestone, 2022-04-30, 1min
            Eval data released :milestone, 2022-07-25, 1min
            HASPI Submission deadline  :milestone, 2022-09-01, 1min
            Evaluation Phase               :         2022-09-01,2022-12-02
            Listening test Submission deadline  :milestone, 2022-09-15, 1min
            Clarity Workshop         :milestone,        2022-12-02, 1min


         `}
          />
        </Paper>
        <Paper sx={{ p: 4, m: 6 }}>
          <h2>The 1st Clarity Prediction Challenge (CPC1)</h2>
          <Mermaid
            chart={`gantt
            dateFormat  YYYY-MM-DD
            title CPC1 Schedule
            
            section CPC1
            Participation Phase              :done,         2021-11-16, 2022-03-21
            Train/Dev Data Released     :milestone,        2021-11-16, 1min
            Launch Webinar              :milestone,        2021-11-23, 1min
            Eval Data Released          :milestone,         2022-03-01, 1min
            Submission Deadline         :milestone,        2022-03-21, 1min
            Evaluation Phase               :done,        2022-03-21,2022-06-29
            Interspeech Paper Deadline         :milestone,        2022-03-28, 1min
            CPC1 Tech Report Deadline         :milestone,        2022-04-25, 1min
            Clarity-2022 Workshop         :milestone,        2022-06-29, 1min
            Interspeech-2022 Special Session         :milestone,        2022-09-18, 1min




         `}
          />
        </Paper>
        <Paper sx={{ p: 4, m: 6 }}>
          <h2>The 1st Clarity Enhancement Challenge (CEC1)</h2>
          <Mermaid
            chart={`gantt
            dateFormat  YYYY-MM-DD
            title CEC1 Schedule
            

            section CEC1
            Participation Phase            : done,    2021-02-01, 2021-06-15
            Train/Dev Data and Baseline Released  :milestone, 2021-02-01, 1min
            Launch Webinar :milestone, 2021-03-03, 1min
            Eval Data Released  :milestone, 2021-06-01, 1min
            MBSTOI Submission deadline  :milestone, 2021-06-15, 1min
            Evaluation Phase               : done, 2021-06-15, 2021-09-17 
            Listening test Submission deadline  :milestone, 2021-06-29, 1min
            Clarity-2021 Workshop :milestone, 2021-09-17, 1min


         `}
          />
        </Paper>
      </main>{" "}
    </Layout>
  );
}
