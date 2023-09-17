import styles from "./Results.module.css";
const Results = ({ results, initialInvestment }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((row, index) => (
          <tr key={index}>
            <td>{row.year}</td>
            <td>{formatter.format(row.savingsEndOfYear)}</td>
            <td>{formatter.format(row.yearlyInterest)}</td>
            <td>
              {formatter.format(
                row.savingsEndOfYear -
                  initialInvestment -
                  row.yearlyContribution * row.year,
              )}
            </td>
            <td>
              {formatter.format(
                initialInvestment + row.yearlyContribution * row.year,
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Results;
