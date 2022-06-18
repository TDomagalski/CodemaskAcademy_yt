import { useState} from "react";
import {Language} from "lib/models";
import {APP_CONFIG} from "../../lib/config";

export const useSupportedLanguages = (
	onSuccess: (language: Array<Language>) => void
) => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [hasError, setHasError] = useState<boolean>(false);
	
	return {
		isLoading,
		hasError,
		fetch: () => {
			setLoading(true);
			setHasError(false);
			
			fetch(`${APP_CONFIG.API_URL}/languages`)
				.then(response => {
					if (response.ok) {
						return response
					}
					// Gdy użyjemu tutaj throw, omijamy 2x .then i przeskakujemy do .catch
					throw response
				})
				.then(response => response.json())
				.then(onSuccess)
			//@TODO - Promise, do poczytania !
				// jeżeli coś poszło nie tak
				.catch(() => {
					setHasError(true);
				})
				.finally(() => {
					setLoading(false);
				})
		}
	}
}
