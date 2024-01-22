import {useFragment} from "@apollo/client";
import {
    CharacterFragmentFragment,
    CharacterFragmentFragmentDoc, LocationFragmentFragmentDoc
} from "./__generated__/CharacterFragment";


export const CharacterWithFragment = (props: { id: string}) => {
    const { data, missing } = useFragment<CharacterFragmentFragment>({
        fragment: CharacterFragmentFragmentDoc,
        fragmentName: 'CharacterFragment',
        from: {
            __typename: 'Character',
            id: props.id
        }
    });
    const { data: locationData } = useFragment<CharacterFragmentFragment>({
        fragment: LocationFragmentFragmentDoc,
        fragmentName: 'LocationFragment',
        from: {
            __typename: 'Location',
            id: data.location.id
        }
    });


    if (missing) {
        return <div>missing info</div>
    }

    return (
        <div>
            <div>name: {data.name}</div>
            <div>location: {locationData.name}</div>
        </div>
    )
}

export const CharacterWithoutFragment = (props: { name: string, locationName: string }) => {
    return (
        <div>
            <div>name: {props.name}</div>
            <div>location: {props.locationName}</div>
        </div>
    )
}