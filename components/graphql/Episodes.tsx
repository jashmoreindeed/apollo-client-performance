import React from 'react';
import {useGetEpisodesQuery} from "./__generated__/EpisodesQuery";
import {CharacterWithFragment, CharacterWithoutFragment} from "./Character";

export const Episodes = (props: { useFragments: boolean }) => {
    const {data, loading} = useGetEpisodesQuery();

    if (loading || !data?.episodes?.results) {
        return <div>loading</div>;
    }

    return (
        <ul>
            {data.episodes.results.map(episode => (
                <li key={episode!.id}>
                    <div>{episode!.name}</div>
                    <ul>
                        {episode!.characters.map(character => (
                            <li key={character!.id}>
                                {props.useFragments ?
                                    <CharacterWithFragment id={character!.id!}/> :
                                    <CharacterWithoutFragment name={character?.name!} locationName={character!.location.name}/>}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default Episodes;