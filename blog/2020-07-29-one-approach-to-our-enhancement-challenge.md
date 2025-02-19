---
slug: One approach to our enhancement challenge
title: One approach to our enhancement challenge
authors: 
- name: Trevor Cox
  title: Clarity Team Member
  url: http://trevorcox.me/trevor-cox
  image_url: https://avatars.githubusercontent.com/trevorjcox
tags: [DNN, enhancement, evaluation, GAN, hearing aid, knowledge distillation]
---

Improving hearing aid processing using DNNs blog. A suggested approach to overcome the non-differentiable loss function.


The aim of our Enhancement Challenge is to get people producing new algorithms for processing speech signals through hearing aids. We expect most entries to replace the classic hearing aid processing of Dynamic Range Compressors (DRCs) with [deep neural networks (DNN)](https://en.wikipedia.org/wiki/Deep_learning) (although all approaches are welcome!). The first round of the challenge is going to be all about improving speech intelligibility.

Setting up a DNN structure and training regime for the task is not as straightforward as it might first appear. Figure 1 shows an example of a naive training regime. An audio example of Speech in Noise (SPIN) is randomly created (*audio sample generation*, bottom left), and a listener is randomly selected with particular hearing loss characteristics (*random artificial listener generation*, top left). The DNN Enhancement model (represented by the bright yellow box) then produces improved speech in noise. (Audio signals in pink are two-channel, left and right because this is for binaural hearing aids.)

![schematic](/img/clarity_schematic_for_blog-09.png)

Figure 1

Next the improved speech in noise is passed to the Prediction Model in the lime green box, and this gives an estimation of the Speech Intelligibility (SI). Our baseline system will include algorithms for this. We’ve already blogged about the Hearing Loss Simulation. Our current thinking is that the intelligibility model will be using a binaural form of the Short-Time Objective Intelligibility Index (STOI) [1]. The dashed line going back to the enhancement model shows that the DNN will be updated based on the reciprocal of the Speech Intelligibility (SI) score. By minimising (1/SI), the enhancement model will be maximising intelligibility.

<!--truncate-->

The difficulty here is that updating the Enhancement Model DNN during training requires the error to be known at the DNN’s output (the point labelled “improved SPIN”). But we don’t know this, we only know the error on the output of the prediction model at the far right of the diagram. This wouldn’t be a problem if the prediction model could be inverted, because we could then run the 1/SI error backwards through the inverse model.

As the inverse of the prediction model isn’t available, one solution is to train another DNN to mimic its behaviour (Figure 2). As this new Prediction Model is a DNN, the 1/SI error can be passed backwards through it using standard neural network training formulations.

![schematic](/img/clarity_schematic_for_blog-10.png)

This DNN prediction model could be trained first using knowledge distillation ([this is something I’ve previous done for a speech intelligibility model](http://usir.salford.ac.uk/id/eprint/56234/)), and then the weights frozen while the Enhancement Model is trained. But there is a ‘chicken and egg’ problem here. The difficulty is generating all the training data for the prediction model. Until you train the enhancement model, you won’t have a representative examples of “improved SPIN” to train the prediction model. But without the prediction model, you can’t train the enhancement model.

One solution is to train the two DNNs in tandem, with an approach analogous to how pairs of networks are trained in a [Generative Adversarial Network](https://en.wikipedia.org/wiki/Generative_adversarial_network) (GAN). iMetricGan developed by Li et al. [2] is an example of this being done for speech enhancement, although the authors weren’t trying to include hearing loss simulation. They aren’t the only ones looking at trying to solve problems where a non-differentiable or black-box evaluation function is in the way of DNN training [3][4].

We hope our entrants will come up with lots of other ways of overcoming this problem. How would you tackle it?

## References

- [1] Andersen, A.H., Haan, J.M.D., Tan, Z.H. and Jensen, J., 2015. A binaural short time objective intelligibility measure for noisy and enhanced speech. In the *Sixteenth Annual Conference of the International Speech Communication Association*.
- [2] Li, H., Fu, S.W., Tsao, Y. and Yamagishi, J., 2020. iMetricGAN: Intelligibility Enhancement for Speech-in-Noise using Generative Adversarial Network-based Metric Learning. *arXiv preprint arXiv:2004.00932*.
- [3] Gillhofer, M., Ramsauer, H., Brandstetter, J., Schäfl, B. and Hochreiter, S., 2019. A GAN based solver of black-box inverse problems. Proceedings of the *NeurIPS 2019 Workshop*.
- [4] Kawanaka, M., Koizumi, Y., Miyazaki, R. and Yatabe, K., 2020, May. Stable training of DNN for speech enhancement based on perceptually-motivated black-box cost function. In ICASSP 2020-2020 *IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)* (pp. 7524-7528). IEEE.
