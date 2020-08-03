import React from 'react'
import { Dropdown, Input } from 'semantic-ui-react'

const tagOptions = [
  {
    key: 'Singapore',
    text: 'Singapore',
    value: 'Singapore',
  },
  {
    key: 'Malaysia',
    text: 'Malaysia',
    value: 'Malaysia',
  },
  {
    key: 'Indonesia',
    text: 'Indonesia',
    value: 'Indonesia',
  },
  {
    key: 'Philippines',
    text: 'Philippines',
    value: 'Philippines',
  },
  {
    key: 'Thailand',
    text: 'Thailand',
    value: 'Thailand',
  },
]

const DropdownExampleMultipleSearchInMenu = () => (
  <Dropdown
    placeholder='Select a Location'
    clearable
    fluid
    multiple
    search
    selection
    options={tagOptions}
  />
)

export default DropdownExampleMultipleSearchInMenu
