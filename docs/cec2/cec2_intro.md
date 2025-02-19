---
id: cec2_intro
title: The 2nd Clarity Enhancement Challenge
sidebar_label: CEC2 Introduction
sidebar_position: 1
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import { TwitterTimelineEmbed } from "react-twitter-embed";

<!--:::info
**14th April 2022: Software tools and data are now available for [download](cec2_download.mdx)**.
:::
-->
:::info
The 2nd Clarity Enhancement Challenge has now finished. For the details of the systems that were submitted and to see the table of results, please visit the <b><a href="https://claritychallenge.org/clarity2022-CEC2workshop/">Clarity-CEC2-2022 Workshsop website</a></b>.

For details of information on forthcoming challenge see <b><a href="https://claritychallenge.org/timeline">here</a></b>.
:::

This second Clarity Enhancement Challenge (CEC2) is about improving the performance of hearing aids for speech-in-noise. According to the World Health Organization, 430 million people worldwide require rehabilitation to address hearing loss. By 2050, this will increase to one in ten people having disabling hearing loss. Yet even in developed countries, only 40% of people who could benefit from hearing aids have them. A major reason for low uptake and use is the perception that hearing aids perform poorly.

## Overview of challenge

We want you to improve speech in the presence of background noise - see [Figure 1](#fig1). On the left there is a person with a quantified hearing loss. They are listening to speech from the target talker on the right. They are both in a living room. There is interfering noise from a number of sources (TV and washing machine in this case). The speech and noise is sensed by microphones on the hearing aids of the listener. Your task is to take these microphone feeds and the listener’s hearing characteristics, to produce signals where the speech is more intelligible. We will evaluate the success of your processing using an objective speech intelligibility metric. Some entrants will also be evaluated by a panel of listeners with a hearing impairment.

<figure id="fig1">
<img src={useBaseUrl('/img/CEC2/scenario.png')} />
<figcaption>Figure 1. The scenario involves one talker, a listener who rotates their head, and at least two common sources of unwanted sound.</figcaption>
</figure>

The scenario has been made more difficult than the first [Clarity Enhancement Challenge](../cec1/cec1_intro.md) by having:

- More noise sources
- More varied noise sources (speech, music, appliances)
- The listener turns their head during the talking.
- Less predictable target onset timing.

For more details use the contents pane on the left to navigate the CEC2 site.
