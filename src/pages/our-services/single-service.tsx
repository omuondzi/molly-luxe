import { Spinner } from "@nextui-org/react";
import NotFoundPage from "@pages/not-found";
import SingleServicePageView from "@views/our-services/single-service";
import { SOLUTION, SOLUTIONS } from "data/solutions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleServicePage = () => {
	const [foundService, setFounService] = useState<SOLUTION | null>(null);
	const [fetchingService, setFetchingService] = useState<boolean>(true);

	const params = useParams();

	const handleFilterSolutions = (id: string) => {
		const foundSolution = SOLUTIONS.find((solution) => solution.id === id);

		if (foundSolution) {
			setFounService(foundSolution);
		} else {
			setFounService(null);
		}
	};

	useEffect(() => {
		(() => {
			setFetchingService(true);
			try {
				if (params.id) {
					handleFilterSolutions(params.id);
				}
			} catch (error) {
				alert("An error occurred while fetching solution");
			} finally {
				setFetchingService(false);
			}
		})();
	}, [params?.id]);

	if (fetchingService)
		return (
			<main className="flex items-center justify-center min-h-[80vh]">
				<Spinner />
			</main>
		);

	if (!foundService) {
		return <NotFoundPage />;
	}

	return <SingleServicePageView service={foundService} />;
};

export default SingleServicePage;
