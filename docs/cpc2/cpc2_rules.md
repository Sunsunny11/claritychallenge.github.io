---
id: cpc2_rules
title: The Challenge Rules
sidebar_label: Challenge rules
sidebar_position: 3
---


## What information can I use?

### Training and development

Teams should use the signals and listener responses provided in the `CPC2.train.json` file.

In addition, teams can use their own data for training or expand the training data through simple automated modifications. Additional pre-training data could be generated by existing speech intelligibility and hearing loss models. The [FAQ](./cpc2_faq#data) gives links to some models that might be used for this.

Any audio or metadata can be used during training and development, but during evaluation the prediction model(s) will not have access to all of the data (see next section).

### Evaluation

The only data that can be used by the prediction model(s) during evaluation are described below.

For non-intrusive methods:

- The output of the hearing aid processor/system.
- The IDs of the listeners assigned to the scene/hearing aid system in the metadata provided.
- The listener metadata.

Additionally, for intrusive methods:

- The target reference signal, i.e. the target convolved with the anechoic BRIR (channel 1) for each ear (‘target_anechoic’).
- The prompt for the utterances (the text the actors were given to read).

## Baseline models and computational restrictions

- Teams may choose to use all or some of the provided baseline models.
- There is no limit on computational cost.
- Models can be non-causal.

## What sort of model do I create?

- You model should report the speech intelligibility for the whole sentence for each audio sample/listener combination, i.e. a single score that represents a prediction of the proportion of words that would be recognised correctly
- The model architecture is entirely up to you, e.g. you can create a model that attempts to recognise individual words and then reduces this down to a proportion, or you can estimate an intelligibility score directly from the audio. Models may have explicit hearing loss model stages or be trained directly to map signals and audiograms to predictions.

## Submitting multiple entries

If you wish to submit multiple entries,

- Your systems must have significant differences in their approach.
- You must contact the organisers to discuss your plans.
- If accepted you will be issued with multiple Team IDs to distinguish your entries.
- In your documentation, you must make it clear how the submissions differ.

## Evaluation of systems

- Entries will be ranked according to their performance in predicting measured intelligibility scores.
- The system score will be taken to be the RMSE between the predicted and measured intelligibility scores across the complete test set.
- Separate rankings will be made for intrusive and non-intrusive methods.
- Systems will only be considered if the technical report has been submitted and the system is judged to be compliant with the challenge rules.

## Teams

- Teams must have registered and nominated a contact person.
- Teams can be from one or more institutions.
- The organisers - and any person forming a team with one or more organisers - may enter the challenge themselves but will not be eligible to win the cash prizes.

## Transparency

- Teams must provide a technical document of up to 2 pages describing the system/model and any external data and pre-existing tools, software and models used.
- We will publish all technical documents on the challenge website (anonymous or otherwise).
- Teams are encouraged – but not required – to provide us with access to the system(s)/model(s) and to make their code open source.
- Anonymous entries are allowed but will not be eligible for cash prizes.
- If a group of people submits multiple entries, they cannot win more than one prize in a given category.
- All teams will be referred to using anonymous codenames if the rank ordering is published before the final results are announced.
- Teams are strongly encouraged to submit their report for presentation at the Clarity-2023 Interspeech Satellite Workshop.

## Intellectual property

The following terms apply to participation in this machine learning challenge (“Challenge”). The entrants'  “Submission” will consist of a set of intelligibility predictions and an accompanying technical report. The Challenge is organised by the “Challenge Organiser”.

Entrants retain ownership of all intellectual and industrial property rights (including moral rights) in and to Submissions.

As a condition of submission, Entrant grants the Challenge Organiser, its subsidiaries, agents and partner companies, a perpetual, irrevocable, worldwide, royalty-free, and non-exclusive license to use, reproduce, adapt, modify, publish, distribute, publicly perform, create a derivative work from, and publicly display the Submission.

Entrants provide Submissions on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.
