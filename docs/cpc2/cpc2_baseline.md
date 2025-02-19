---
id: cpc2_baseline
title: Baseline system
sidebar_label: Baseline system
sidebar_position: 4
---

:::note
The baseline CPC2 code will be available in the [Github Clarity repository](https://github.com/claritychallenge/clarity) from March 6th.
:::

A baseline intrusive intelligibility prediction system has been provided to help you get started.

The baseline uses the existing HASPI model \[[1](#refs)] to make its predictions. HASPI is an intrusive measure that takes a processed signal, a reference and a listener audiogram and outputs an intelligibility score between 0 and 1. The HASPI output is then passed through a sigmoid function, the parameters of which have been optimised on the training data to minimise the RMSE between the predicted and measured intelligibility scores. The output of the logistic is taken to be the sentence intelligibility prediction.

The baseline is distributed as part of the pyclarity Python package (`pyclarity` >=0.3.0), which is available on [Github](https://github.com/claritychallenge/clarity). The relevant scripts can be found in the recipes directory, `recipes/cpc2/baseline`. Download the code from Github and follow the instructions in the CPC2 baseline recipes's `README` to run the baseline on the CPC2 dataset.

## References

<a name="refs"></a>

1. Kates, J.M. and Arehart, K.H., 2021. The hearing-aid speech perception index (haspi) version 2. Speech Communication, 131, pp.35-46.
