import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { SidebarLeft, Header } from "../components";
import { callApi } from "../api";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
    borderRadius: 16,
  },
  tableHeader: {
    backgroundColor: "#808080", // Gris
    color: "#ffffff",
  },
  tableRow: {
    "&:nth-of-type(even)": {
      backgroundColor: "#f2f2f2",
    },
  },
}));

const InvestmentInfoPage = () => {
  const classes = useStyles();
  const [investmentHistory, setInvestmentHistory] = useState([]);

  useEffect(() => {
    fetchInvestmentHistory();
  }, []);

  const fetchInvestmentHistory = async () => {
    try {
      const response = await callApi("auth/investmentHistory");
      setInvestmentHistory(response);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de l'historique d'investissement :",
        error
      );
    }
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <main>
        <div className="container">
          <br />
          <br />
          <div className="row g-4">
            <SidebarLeft />
            <div className="col-md-8 col-lg-6 vstack gap-4">
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Typography variant="h4" gutterBottom>
                    Historique des investissements
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Voici l'historique de vos investissements passés :
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell className={classes.tableHeader}>
                            Startup
                          </TableCell>
                          <TableCell className={classes.tableHeader}>
                            Montant (€)
                          </TableCell>
                          <TableCell className={classes.tableHeader}>
                            Date
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {investmentHistory.map((transaction, index) => (
                          <TableRow key={index}>
                            <TableCell>{transaction.startup_name}</TableCell>
                            <TableCell>{transaction.amount}</TableCell>
                            <TableCell>{transaction.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestmentInfoPage;