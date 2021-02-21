import { useRouter } from "next/router";
import { Layout } from "../components/Layout";
import { CountryInfo } from "../components/CountryInfo";
import { Search } from "../components/Search";

const IndexPage = () => {
  const router = useRouter();

  const {
    query: { country },
  } = router;

  return (
    <Layout>
      <Search
        onSelect={(code) =>
          router.push(`/?country=${code}`, undefined, { shallow: true })
        }
      />

      {country && <CountryInfo isoCode={country} />}
    </Layout>
  );
};

export default IndexPage;
