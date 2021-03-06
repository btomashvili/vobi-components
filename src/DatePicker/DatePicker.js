import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

const Wrapper = styled.div`
  .CalendarDay__default {
      border: 0;
      border-radius: 50%;
  }
  .CalendarDay__default:hover {
      border: 0;
  }
  .CalendarDay__hovered_offset {
      border: 0;
  }
  .CalendarDay__blocked_minimum_nights {
      border: 0;
  }
  .CalendarDay__selected_span {
      border: 0;
  }
  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
      border: 0;
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
      border: 0;
  }

  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
      border: 0;
  }

  .CalendarDay__hovered_span:active {
      border: 0;
  }

  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
      border: 0;
  }

  .CalendarDay__blocked_out_of_range,
  .CalendarDay__blocked_out_of_range:active,
  .CalendarDay__blocked_out_of_range:hover {
      border: 0;
  }

  .CalendarMonth_caption {
      text-align: left;
  }

  .DayPickerNavigation_leftButton__horizontal {
      right: 70px;
      left: auto;
  }

  .DayPickerNavigation_button__horizontal {
      border-radius: 50%;
      padding: 6px 8px;
  }

  .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover {
      background: #06c953;
  }

  .DateInput_input__focused {
      box-sizing: border-box;
  }

  .DateInput_input {
      box-sizing: border-box;
      padding: 7px 7px 6px;
  }

  .CalendarDay {
      font-weight: 600;
  }

  .SingleDatePickerInput_calendarIcon {
      padding: 0;
      margin: 0 5px 0 10px;
  }
`

class DatePicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      focused: false,
      // date: null,
    }
  }

  render() {
    return (
      <Wrapper>
        <SingleDatePicker
          date={this.props.date || null}
          onDateChange={this.props.onDateChange}
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="your_unique_id"
          placeholder={this.props.placeholder}
          numberOfMonths={1}
          hideKeyboardShortcutsPanel
          showDefaultInputIcon
        />
      </Wrapper>
    )
  }
}

DatePicker.propTypes = {
  placeholder: PropTypes.string,
}

DatePicker.defaultProps = {
  placeholder: 'Date',
}

export default DatePicker
