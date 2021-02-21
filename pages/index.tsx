import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { CountryInfo } from "../components/CountryInfo";
import { Search } from "../components/Search";

const IndexPage = () => {
  const router = useRouter();

  const {
    query: { country },
  } = router;

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="flex flex-col items-center max-w-lg w-full p-8 mx-auto">
        <Header />

        <Search
          onSelect={(code) =>
            router.push(`/?country=${code}`, undefined, { shallow: true })
          }
        />

        {country && <CountryInfo isoCode={country} />}
      </div>
    </div>
  );
};

export default IndexPage;
