import React from "react"
import {
    Container,
    Holder,
    H12,
    H32
} from "react-stylux"
export default function Landing() {
    return (
        <Container>
            <Holder
                direction="column">
                <H12>Survey Emailer!</H12>
                <H32>Collect feedback from your users</H32>
            </Holder>
        </Container>
    )
}