import { useRouter } from "next/router";
import { CountryInfo } from '../components/CountryInfo'
import { Search } from '../components/Search'

const IndexPage = () => {
  const router = useRouter();

  const {
    query: { country },
  } = router;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex items-center justify-center">
        <Search onSelect={(code) => router.push(`/?country=${code}`, undefined, { shallow: true })} />
      </div>
      { country && <CountryInfo isoCode={country} /> }
    </div>
  );
};

export default IndexPage;
