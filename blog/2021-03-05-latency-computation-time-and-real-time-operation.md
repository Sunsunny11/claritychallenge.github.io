---
slug: Latency, computation time and real-time operation
title: Latency, computation time and real-time operation
authors: 
- name: Trevor Cox
  title: Clarity Team Member
  url: http://trevorcox.me/trevor-cox
  image_url: https://avatars.githubusercontent.com/trevorjcox
tags: [challenge, computation, enhancement, latency, real-time]
---



An explanation of the time and computational limits for the first round of the enhancement challenge.

## The 1st Clarity Enhancement Challenge

For a hearing aid to work well for users, the processing needs to be quick. The output of the hearing aid should be produced with a delay of less than about 10 ms. Many audio processing techniques are non-causal, i.e., the output of the system depends on samples from the future. Such processing is useless for hearing aids and therefore our rules include a restriction on the use of future samples.

The rules state the following:

- Systems must be causal; the output at time t must not use any information from input samples more than 5 ms into the future (i.e., no information from input samples >t+5ms).
- There is no limit on computational cost.

<!--truncate-->

Mathematically this is:

yn=f(xm , xm+1 ... xn+N–1 , xn+N , L )

- where yn is the output from your hearing aid for sample n.
- x is the audio input signal from a hearing aid microphone.
- N = 0.005 fs where fs is the sampling frequency.
- m is a sample number where m <= n.
- L is the listener characteristics.
- f() is the hearing aid function. There is no limitation on how long this takes to compute.
- You can use multiple microphones; only a single input signal x is shown here just for simplicity.

Here it is illustrated as a diagram.

![latency diagram](/img/latency_diagram-1.png)

Figure. Example of how the limit of 5 ms is applied to a hearing aid input and output signal.
We have a chosen a limit of 5 ms because in a real hearing aid there will be other sources of delay (e.g., analogue-to-digital, digital-to-analogue conversion).

## Why is there no limitation of how long f() takes to compute?

We’re trying to foster new approaches to hearing aid processing and decided that at this stage we will drive more innovation if we don’t restrict computation time for round one. Such restrictions will be considered in future rounds.

## Why haven’t you talked about latency?

In discussions, it is apparent that this term is used in different ways by different people, so to avoid confusion we’re not using it!

## Do algorithms have to be real-time?

The above limitations mean that the algorithms could in theory be made real-time if a powerful enough computer was available, but your entry can take as long as it needs to process the signals.
