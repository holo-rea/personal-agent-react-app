import gql from "graphql-tag"
import { event } from "../fragments/economicEvents"

const getProcess = gql`
  query($id: ID) {
      process(id: $id) {
        id
        name
        note
        scope {
          name
          image
          id
        }
        processPlan {
          name
          due
          id
        }
        plannedStart
        plannedFinish
        isFinished
        unplannedEconomicEvents {
          ...BasicEvent
        }
        userIsAuthorizedToUpdate
        userIsAuthorizedToDelete
        workingAgents {
          id
          name
          image
        }
        committedInputs {
          note
          id
          action
          isFinished
          plannedStart
          due
          fulfilledBy {
            fulfilledBy {
              ...BasicEvent
            }
          }
          resourceClassifiedAs {
            name
            id
          }
          committedQuantity {
            unit {
              id
              name
            }
            numericValue
          }
        }
        committedOutputs {
          note
          id
          action
          fulfilledBy {
            fulfilledBy {
              ...BasicEvent
            }
          }
          provider {
            id
            name
            image
          }
          due
          resourceClassifiedAs {
            name
            id
          }
          committedQuantity {
            unit {
              id
              name
            }
            numericValue
          }
        }
      }
  }
  ${event}`

export default getProcess
