import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch('/getdata')
      .then(data => data.json())
      .then(res => this.setState({ data: res.contacts, loading: true }));
  }

  render() {
    const { data, loading } = this.state;

    const columns = [
      {
        Header: 'NAME',
        accessor: 'contact_name',
      },
      {
        Header: 'COMPANY NAME',
        accessor: 'company_name',
      },
      {
        Header: 'EMAIL',
        accessor: 'email',
      },
      {
        Header: 'GST TREATMENT',
        accessor: 'gst_treatment',
      },
      {
        Header: 'RECIVABLE AMOUNT',
        accessor: 'outstanding_receivable_amount',
        Cell: props => <span className="number">{props.value}₹</span>,
      },
      {
        Header: 'PAYABLE AMOUNT',
        accessor: 'outstanding_payable_amount',
        Cell: props => <span className="number">{props.value}₹</span>,
      },
    ];
    return (
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={5}
        loading={!loading}
      />
    );
  }
}

export default App;
