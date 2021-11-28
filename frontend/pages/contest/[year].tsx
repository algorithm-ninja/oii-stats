import Head from "next/head";
import { Layout } from "components/layout/layout";
import {
  ContestDetail,
  ContestResults,
  loadContest,
  loadContestResults,
} from "lib/remote/contest";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { Error } from "lib/remote/common";
import { Contest } from "components/contest/contest";

type Props = {
  year: number;
  contest: ContestDetail | Error;
  results: ContestResults | Error;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { year: "2021" } }],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params) return { notFound: true, props: {} };
  const contestYear = parseInt(params.year as string, 10);
  if (Number.isNaN(contestYear)) return { notFound: true, props: {} };

  const contest = await loadContest(contestYear);
  const results = await loadContestResults(contestYear);

  return {
    props: {
      year: contestYear,
      contest,
      results,
    },
  };
};

export default function ContestYear({
  contest,
  results,
  year,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if ("error" in contest) {
    return (
      <Layout>
        <p>{contest.error}</p>
      </Layout>
    );
  }
  if ("error" in results) {
    return (
      <Layout>
        <p>{results.error}</p>
      </Layout>
    );
  }
  return (
    <Layout>
      <Head>
        <title>
          OII Stats - {contest.location.location} {year}
        </title>
      </Head>
      <Contest year={year} contest={contest} results={results} />
    </Layout>
  );
}