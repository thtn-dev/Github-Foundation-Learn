import { Octokit } from "octokit";

const ACCESS_TOKEN = process.env.GH_TOKEN;

const octokit = new Octokit({ auth: ACCESS_TOKEN });

async function getRepoInfo() {
    const { data } = await octokit.rest.repos.get({
        owner: "thtn-dev",
        repo: "Github-Foundation-Learn"
    });
    console.log(data);
}

getRepoInfo().catch(console.error);

async function createBranch() {
    const owner = "thtn-dev";
    const repo = "Github-Foundation-Learn";
    const branch = "sdks-nodejs";
    // Get the default branch reference (usually 'main' or 'master')
    const { data: repoData } = await octokit.rest.repos.get({ owner, repo });
    const baseBranch = repoData.default_branch;

    // Get the latest commit SHA of the base branch
    const { data: refData } = await octokit.rest.git.getRef({
        owner,
        repo,
        ref: `heads/${baseBranch}`
    });
    const sha = refData.object.sha;

    // Create the new branch
    await octokit.rest.git.createRef({
        owner,
        repo,
        ref: `refs/heads/${branch}`,
        sha
    });

    console.log(`Branch '${branch}' created from '${baseBranch}'.`);
}

createBranch().catch(console.error);