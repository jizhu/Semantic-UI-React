import React from 'react'
import { Icon, Image, Statistic } from 'semantic-ui-react'

const { Group, Label, Value } = Statistic

const EvenlyDivided = () => (
  <Group widths='four'>
    <Statistic>
      <Value>22</Value>
      <Label>Saves</Label>
    </Statistic>

    <Statistic>
      <Value text>
        Three
        <br />Thousand
      </Value>
      <Label>Signups</Label>
    </Statistic>

    <Statistic>
      <Value>
        <Icon name='plane' />
        5
      </Value>
      <Label>Flights</Label>
    </Statistic>

    <Statistic>
      <Value>
        <Image src='http://semantic-ui.com/images/avatar/small/joe.jpg' className='circular inline' />
        42
      </Value>
      <Label>Team Members</Label>
    </Statistic>
  </Group>
)

export default EvenlyDivided
