function createCandidates(numCandidates) {
    const candidates = [];
    for (let i = 0; i < numCandidates; i++) {
        const name = prompt(`Name for candidate ${i + 1}:`);
        candidates.push({ name: name, votes: 0 });
    }
    return candidates;
}

function conductVoting(candidates, numVoters) {
    for (let i = 0; i < numVoters; i++) {
        const vote = prompt(`Voter ${i + 1}, who do you vote for?`);
        if (vote) {
            const candidate = candidates.find(candidate => candidate.name === vote);
            if (candidate) {
                candidate.votes += 1;
            } else {
                console.log(`Invalid vote for ${vote}.`);
            }
        }
    }
}

function determineWinner(candidates) {
    candidates.sort((a, b) => b.votes - a.votes);
    const winner = candidates[0];
    return winner;
}

function main() {
    const numCandidates = parseInt(prompt("Enter the number of candidates:"), 10);
    const candidates = createCandidates(numCandidates);

    const numVoters = parseInt(prompt("Enter the number of voters:"), 10);
    conductVoting(candidates, numVoters);

    const winner = determineWinner(candidates);
    console.log(`The winner is ${winner.name} with ${winner.votes} votes.`);
    console.log("Results:");
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}
main();
