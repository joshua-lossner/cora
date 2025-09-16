# Code Review Plan

## Goals
- Ensure correctness, clarity, security, and performance.
- Provide actionable, kind feedback aligned to project standards.

## Steps
1. Scope & Setup
   - Pull latest changes, run tests, open diff by commits.
   - Skim description, linked issue, and acceptance criteria.
2. Automated Checks
   - Lint, typecheck, tests; scan for secrets and risky patterns.
3. Deep Review
   - Correctness: edge cases, null/undefined, error paths.
   - Clarity: naming, cohesion, comments for non-obvious logic.
   - Architecture: boundaries, duplication, dependency impact.
4. Security & Performance
   - Inputs validated, outputs escaped, least privilege.
   - Hot paths, N+1 queries, memoization/caching opportunities.
5. Feedback & Follow-up
   - Group comments by severity; propose alternatives.
   - Confirm CI status; request changes or approve.

## Outputs
- Summary of findings with severity.
- Concrete next steps and suggested commit messages.

