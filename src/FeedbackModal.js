import React, { useState } from 'react'
import {
  Alert,
  Button,
  Card,
  Field,
  Input,
  Link,
  Modal,
  Select,
  StackView,
  Text,
  ThemeProvider,
  TextArea,
  Heading,
} from '@planning-center/ui-kit'

function FeedbackModal({ show, hideModal }) {
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [body, setBody] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)
  const [showErrors, setShowErrors] = useState(false)
  const { Octokit } = require('@octokit/rest')
  const octokit = new Octokit({
    auth: process.env.REACT_APP_GITHUB_KEY,
  })

  function handleSubmitForm() {
    if (title !== '' && type !== '' && body !== '') {
      setShowErrors(false)
      octokit.issues
        .create({
          owner: 'nicholaskillin',
          repo: 'gloomhaven-hand-manager',
          title: title,
          body: body,
          labels: [type],
        })
        .catch((err) => {
          setSubmissionError(true)
          return
        })
      setSubmitted(true)
    } else {
      setShowErrors(true)
    }
  }

  return (
    <ThemeProvider>
      <Modal id="modal" closeOnOutsideClick open={show}>
        <Card>
          <Card.Section>
            <StackView
              alignment="center"
              axis="horizontal"
              distribution="space-between"
            >
              <Heading color="black">Feedback</Heading>
              <Button
                icon={{ name: 'close' }}
                onClick={hideModal}
                title="close"
              />
            </StackView>
          </Card.Section>
          <Card.Section>
            <StackView spacing={1}>
              {!submitted ? (
                <>
                  {showErrors && (
                    <Alert type="error">Please fill out all fields</Alert>
                  )}
                  <Field
                    label="Subject"
                    helpContent="Brief sentence describing the feedback"
                  >
                    <Input
                      data-testid="subjectInput"
                      onChange={({ target }) => setTitle(target.value)}
                      style={{ color: 'black' }}
                    />
                  </Field>
                  <Field
                    label="Type"
                    helpContent="Is this a bug or a feature request?"
                  >
                    <Select
                      data-testid="typeInput"
                      emptyValue="Bug or Feature Request?"
                      tooltip={{ title: 'Bug or Feature Request' }}
                      onChange={(e) => setType(e.value)}
                      style={{ color: 'black' }}
                    >
                      <Select.Option value="bug">Bug</Select.Option>
                      <Select.Option value="enhancement">
                        Feature Request
                      </Select.Option>
                    </Select>
                  </Field>
                  <Field
                    data-testid="descriptionInput"
                    label="Description"
                    helpContent="Please be detailed here if you found a bug. The more details the better."
                  >
                    <TextArea
                      onChange={({ target }) => setBody(target.value)}
                      style={{ color: 'black', height: '200px' }}
                      placeholder="Please include as many details as you can for bugs"
                    />
                  </Field>
                  <Field inline>
                    <Button onClick={handleSubmitForm} title={'Submit'} />
                  </Field>
                </>
              ) : submissionError ? (
                <Text>
                  Welp, seems like there was an issue sending your feedback. You
                  can visit the{' '}
                  <Link
                    external
                    rel="noopener noreferrer"
                    to="https://github.com/nicholaskillin/gloomhaven-hand-manager/issues"
                  >
                    Github Repo
                  </Link>{' '}
                  to provide that feedback if you'd like.
                </Text>
              ) : (
                <Heading level={2}>Thank you for your submission!</Heading>
              )}
            </StackView>
          </Card.Section>
        </Card>
      </Modal>
    </ThemeProvider>
  )
}

export default FeedbackModal
