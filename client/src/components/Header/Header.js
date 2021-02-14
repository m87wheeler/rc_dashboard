import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import DataCard from "../DataCard/DataCard";
import Select from "../Select/Select";
import { FilterContext } from "../../context/FilterContext/FilterContext";
import { months } from "../../assets/monthArr";
// import PropTypes from 'prop-types'

// *** data, hooks & context

// *** components

// *** styled components
const Wrapper = styled.header`
  width: 100%;
  height: 10rem;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  background: #041023;
`;

const Header = ({ data, ...props }) => {
  const [filterState, dispatchFilter] = useContext(FilterContext);
  const [isLoading, setIsLoading] = useState(true);
  // eslint-disable-next-line
  const [error, setError] = useState([false, ""]);
  const [period, setPeriod] = useState("all");

  // ? load data on mount
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("/api/data");
      const res = await req.json();
      if (!res.success) {
        setError([true, res.message]);
        alert(res.message);
      } else {
        dispatchFilter({ type: "POPULATE_ENTRIES", payload: res.data });
      }
      setIsLoading(false);
    };
    fetchData();
  }, [dispatchFilter]);

  // ? set current entry based on select date
  const handleDateChange = (e) => {
    setPeriod(e.target.value);
    const value = e.target.value;
    const year = value.substr(0, 4);
    const month = value.substr(4, 2);
    dispatchFilter({
      type: "FILTER_PERIOD",
      month: months[Number(month - 1)],
      year,
    });
  };

  return (
    <Wrapper {...props}>
      <div style={{ gridRow: "1 / 2", gridColumn: "1 / 5", color: "#fff" }}>
        <p>Home &gt; Claims &gt; Dashboard</p>
      </div>
      <Typography
        variant="h4"
        element="h1"
        style={{ fontWeight: "700", color: "#fff" }}
      >
        Claims Dashboard
      </Typography>
      <Select
        name="blame_type"
        value="all"
        options={[{ value: "all", label: "All Blame Type" }]}
        onChange={() => {}}
      />
      <Select
        name="scheme"
        value="dl2"
        options={[{ value: "dl2", label: "Arch RE DL2 Scheme" }]}
        onChange={() => {}}
      />
      <Select
        name="period"
        value={period}
        options={[
          { value: "all", label: "Choose a period" },
          { value: "202010", label: "October 2020" },
          { value: "202011", label: "November 2020" },
          { value: "202012", label: "December 2020" },
          { value: "202101", label: "January 2021" },
          { value: "202102", label: "February 2021" },
        ]}
        onChange={handleDateChange}
      />
      {isLoading ? (
        <CircularProgress
          color="secondary"
          style={{
            justifySelf: "center",
            marginTop: "4rem",
            gridColumn: "1 / 5",
          }}
        />
      ) : (
        <Grid container justify="space-between" style={{ gridColumn: "1 / 5" }}>
          <Grid item>
            <Card>
              <DataCard
                isLoading={isLoading}
                title="Total From Start"
                subtitle=""
                currentData={
                  filterState.entries[filterState.filteredIndex]
                    .total_from_start
                }
                prevData={
                  filterState.entries[
                    filterState.filteredIndex === 0
                      ? filterState.entries.length - 1
                      : filterState.filteredIndex - 1
                  ].total_from_start
                }
              />
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <DataCard
                isLoading={isLoading}
                title="Brought Forward"
                subtitle=""
                currentData={
                  filterState.entries[filterState.filteredIndex].brought_forward
                }
                prevData={
                  filterState.entries[
                    filterState.filteredIndex === 0
                      ? filterState.entries.length - 1
                      : filterState.filteredIndex - 1
                  ].brought_forward
                }
              />
              <DataCard
                isLoading={isLoading}
                title="New Claims"
                subtitle=""
                currentData={
                  filterState.entries[filterState.filteredIndex].new_claims
                }
                prevData={
                  filterState.entries[
                    filterState.filteredIndex === 0
                      ? filterState.entries.length - 1
                      : filterState.filteredIndex - 1
                  ].new_claims
                }
              />
              <DataCard
                isLoading={isLoading}
                title="Prev. Backlog"
                subtitle=""
                currentData={
                  filterState.entries[filterState.filteredIndex]
                    .previous_backlog
                }
                prevData={
                  filterState.entries[
                    filterState.filteredIndex === 0
                      ? filterState.entries.length - 1
                      : filterState.filteredIndex - 1
                  ].previous_backlog
                }
              />
              <DataCard
                isLoading={isLoading}
                title="Re-Opened in Month"
                subtitle=""
                currentData={
                  filterState.entries[filterState.filteredIndex]
                    .reopened_in_month
                }
                prevData={
                  filterState.entries[
                    filterState.filteredIndex === 0
                      ? filterState.entries.length - 1
                      : filterState.filteredIndex - 1
                  ].reopened_in_month
                }
              />
              <DataCard
                isLoading={isLoading}
                title="Closed"
                subtitle=""
                currentData={
                  filterState.entries[filterState.filteredIndex].closed
                }
                prevData={
                  filterState.entries[
                    filterState.filteredIndex === 0
                      ? filterState.entries.length - 1
                      : filterState.filteredIndex - 1
                  ].closed
                }
              />
              <DataCard
                isLoading={isLoading}
                title="Carried Forward"
                subtitle=""
                currentData={
                  filterState.entries[filterState.filteredIndex].carried_forward
                }
                prevData={
                  filterState.entries[
                    filterState.filteredIndex === 0
                      ? filterState.entries.length - 1
                      : filterState.filteredIndex - 1
                  ].carried_forward
                }
              />
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <DataCard
                isLoading={isLoading}
                title="Settled at £nil"
                subtitle="(Closed)"
                currentData={
                  filterState.entries[filterState.filteredIndex].settled_at_nil
                }
                prevData={
                  filterState.entries[
                    filterState.filteredIndex === 0
                      ? filterState.entries.length - 1
                      : filterState.filteredIndex - 1
                  ].settled_at_nil
                }
              />
              <DataCard
                isLoading={isLoading}
                title="Settled Claims"
                subtitle="(Closed)"
                currentData={
                  filterState.entries[filterState.filteredIndex].settled_claims
                }
                prevData={
                  filterState.entries[
                    filterState.filteredIndex === 0
                      ? filterState.entries.length - 1
                      : filterState.filteredIndex - 1
                  ].settled_claims
                }
              />
            </Card>
          </Grid>
        </Grid>
      )}
    </Wrapper>
  );
};

// Header.defaultProps = {}

// Header.propTypes = {}

export default Header;
