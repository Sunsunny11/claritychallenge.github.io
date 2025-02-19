---
slug: baseline
title: Baseline speech intelligibility model in round one
author: Simone Graetzer
author_title: Clarity Team Member
author_url: https://www.salford.ac.uk/our-staff/simone-graetzer
author_image_url: https://avatars.githubusercontent.com/sgraetzer
tags: [audibility, intelligibility, MBSTOI, baseline, CEC1]
---

### Some comments on signal alignment and level-insensitivity

Our baseline binaural speech intelligibility measure in round one is the Modified Binaural Short-Time Objective Intelligibility measure, or MBSTOI. This short post outlines the importance of correcting for delays that your hearing aid processing algorithm introduces into the audio signals to allow MBSTOI to estimate the speech intelligibility accurately. It also discusses the importance of considering the audibility of signals before evaluation with MBSTOI.

## Evaluation

In stage one, entries will be ranked according to the average MBSTOI score across all samples in the evaluation test set. In the second stage, entries will be evaluated by the listening panel. There will be prizes for both stages. See this [page](https://claritychallenge.github.io/clarity_CEC1_doc/docs/cec1_rules) for more information.

<!--truncate-->
## Signal alignment in time and frequency

If the signal processed by the hearing aid introduces a significant delay, you should correct for this delay before submitting your entry. This is necessary because MBSTOI requires alignment of the clean speech “reference” with the processed signal in time and frequency. This needs to be done for both ear signals.

MBSTOI downsamples signals to 10 kHz, uses a Discrete Fourier Transform to decompose the signal into one-third octave bands, and performs envelope extraction and short-time segmentation into 386 ms regions. Each region consists of 30 frames. These approaches are motivated by what is know about which frequencies and modulation frequencies are most important for intelligibility. For each frequency band and frame (over the region of which it is the last frame), an intermediate correlation coefficient is calculated between the clean reference and processed power envelopes for each ear. These are averaged to obtain the MBSTOI index. Thus is usually between 0 and 1, and rises monotonically with measured intelligibility scores, such that higher values indicate greater speech intelligibility. Alignment is therefore required at the level of the one-third octave bands and short-time regions.

Our baseline corrects for broadband delay per ear due to the hearing loss model. (The delay is measured by running a kronnecker delta function through the model for each ear.) However, the baseline software will not correct for delays created by your hearing aid processing.

Consequently, when submitting your hearing aid output signals, you are responsible for correcting for any delays introduced by your hearing aid. Note that this must be done blindly; the clean reference signals will not be supplied for the test/evaluation set.

<!--truncate-->

## Level insensitivity

MBSTOI is level-independent, i.e., MBSTOI is broadly insensitive to the level of the processed signal because it is calculated using a cross-correlation method. This could be a problem because sounds that are below the auditory thresholds of the hearing impaired listener may appear to MBSTOI to be highly intelligible.

To overcome this, the baseline experimental code mbstoi_beta, in conjunction with the baseline hearing loss model, can be used to approximate hearing-impaired auditory thresholds. Specifically, mbstoi_beta adds internal noise that can be used to approximate normal hearing auditory thresholds. This noise, in combination with the attenuation of signals by the hearing loss model to simulate raised auditory thresholds, makes MBSTOI level-sensitive.

The noise is created by filtering white noise using pure tone threshold filter coefficients with one-third octave weighting, approximating the shape of a typical auditory filter (from Moore 2012, based on Patterson’s method, 1976). This noise is added to the processed signal. Note, the standard MBSTOI in the equalisation-cancellation stage adds internal noise to parameters, but this is an independent process.

## MBSTOI

The method was developed by Asger Heidemann Andersen, Jan Mark de Haan, Zheng-Hua Tan and Jesper Jensen (Andersen et al., 2018). It builds on the Short-Time Objective Intelligibility (STOI) metric created by Cees H. Taal, Richard C. Hendriks, Richard Heusdens, and Jesper Jensen (Taal et al., 2011). MBSTOI includes a better ear stage and an equalisation-cancellation stage. For simplicity, the latter stage is not discussed here; see Andersen et al. (2018) for details.

## References

- Andersen, A. H., de Haan, J. M., Tan, Z. H., & Jensen, J. (2018). Refinement and validation of the binaural short time objective intelligibility measure for spatially diverse conditions. *Speech Communication*, 102, 1-13.
- Moore, B. C. (2012). *An introduction to the psychology of hearing*. Brill.
- Patterson, R. D. (1976). Auditory filter shapes derived with noise stimuli. *The Journal of the Acoustical Society of America*, 59(3), 640-654.
- Taal, C. H., Hendriks, R. C., Heusdens, R., & Jensen, J. (2011). An algorithm for intelligibility prediction of time–frequency weighted noisy speech. *IEEE Transactions on Audio, Speech, and Language Processing*, 19(7), 2125-2136.

