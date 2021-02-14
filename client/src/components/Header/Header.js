import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "../Card/Card";
import DataCard from "../DataCard/DataCard";
import Select from "../Select/Select";
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

const Header = ({ data, isLoading, ...props }) => {
  console.table(data);

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
        value="202012"
        options={[
          { value: "202010", label: "October 2020" },
          { value: "202011", label: "November 2020" },
          { value: "202012", label: "December 2020" },
          { value: "202101", label: "January 2021" },
          { value: "202102", label: "February 2021" },
        ]}
        onChange={() => {}}
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
                currentData={0}
                prevData={0}
              />
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <DataCard
                isLoading={isLoading}
                title="Brought Forward"
                subtitle=""
                currentData={0}
                prevData={0}
              />
              <DataCard
                isLoading={isLoading}
                title="New Claims"
                subtitle=""
                currentData={0}
                prevData={0}
              />
              <DataCard
                isLoading={isLoading}
                title="Prev. Backlog"
                subtitle=""
                currentData={0}
                prevData={0}
              />
              <DataCard
                isLoading={isLoading}
                title="Re-Opened in Month"
                subtitle=""
                currentData={0}
                prevData={0}
              />
              <DataCard
                isLoading={isLoading}
                title="Closed"
                subtitle=""
                currentData={0}
                prevData={0}
              />
              <DataCard
                isLoading={isLoading}
                title="Carried Forward"
                subtitle=""
                currentData={0}
                prevData={0}
              />
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <DataCard
                isLoading={isLoading}
                title="Settled at £nil"
                subtitle="(Closed)"
                currentData={0}
                prevData={0}
              />
              <DataCard
                isLoading={isLoading}
                title="Settled Claims"
                subtitle="(Closed)"
                currentData={0}
                prevData={0}
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
