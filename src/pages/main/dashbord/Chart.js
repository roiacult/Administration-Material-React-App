import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";
import { CircularProgress, makeStyles } from "@material-ui/core";
import API from "../../../API";

var count = (array) => {
  let counts = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i].getDate();
    counts[element] = counts[element] ? counts[element] + 1 : 1;
  }
  return counts;
};

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const useStyles = makeStyles((theme) => ({
  progress: {
    margin: "auto",
  },
}));

export default function Chart() {
  const classes = useStyles();
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [data, setDate] = useState([]);

  useEffect(() => {
    setLoading(true);
    API.get("/orders_stats")
      .then(function (response) {
        let history = response.data.orders_history.map((item) => {
          let newItem = item.created_on.substr(0, item.created_on.indexOf("T"));
          return new Date(newItem);
        });
        history = count(history);
        let data = [];
        let currentDate = new Date();
        for (let i = 1; i < 16; i++) {
          history[currentDate.getDate()]
            ? data.push(createData(i, history[currentDate.getDate()]))
            : data.push(createData(i, 0));
          currentDate.setDate(currentDate.getDate() - 1);
        }
        setLoading(false);
        setDate(data);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      <Title>Dernier 15 jour</Title>
      {loading && <CircularProgress className={classes.progress} />}
      {!loading && (
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24,
            }}
          >
            <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
            <YAxis stroke={theme.palette.text.secondary}>
              <Label
                angle={270}
                position="left"
                style={{
                  textAnchor: "middle",
                  fill: theme.palette.text.primary,
                }}
              >
                Nombre de command
              </Label>
            </YAxis>
            <Line
              type="monotone"
              dataKey="amount"
              stroke={theme.palette.primary.main}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </React.Fragment>
  );
}
