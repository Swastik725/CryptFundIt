CryptFundIt

# Product And Architecture Plan

## 1. Vision

CryptFundIt is an India-first donation transparency platform that helps donors track where their money goes and helps NGOs/NPOs prove that funds were used as promised.

The core idea is:

- donations are tied to transparent projects
- fund release is controlled through milestone-based escrow on Algorand
- NGO legitimacy is checked against India-specific registry and compliance data, starting with NITI Aayog references
- NGOs submit proof of work for each milestone
- Gemini assists with verification, fraud detection, evidence extraction, and public reporting
- donors get a clear public trail instead of blind trust

## 2. Problem Statement

Traditional donation platforms have three trust gaps:

- donors cannot easily verify whether an NGO is legitimate
- donors rarely see how funds are spent after payment
- even when updates exist, they are fragmented across websites, PDFs, social posts, and images

For India specifically, there is also a data trust problem:

- NGO data is spread across registry entries, government references, websites, PDFs, and informal public activity traces
- donors cannot easily compare what an NGO claims against what public records and field evidence suggest

CryptFundIt should solve this by combining blockchain-backed fund movement with AI-assisted evidence validation.

## 3. Product Goal

Build a platform where a donor can:

- discover an India-verified NGO campaign
- donate to a milestone-based project
- see whether funds are locked, released, or refunded
- inspect supporting evidence for each milestone
- view Gemini-generated summaries with references, fraud flags, and confidence levels

Build a platform where an NGO can:

- create a profile and submit verification details
- launch a fundraising campaign with milestones
- upload proof for milestone completion
- receive milestone-based disbursements after review

## 3.1 India-First Scope

The first release should be built only for India.

This means:

- NGO onboarding should collect India-relevant identifiers and compliance details
- verification logic should use NITI Aayog data as a primary trust anchor where applicable
- address, legal entity, and project geography should be modeled for Indian states and districts
- the admin workflow should explicitly show registry match status, document mismatch status, and unresolved identity gaps

The plan should not optimize for global onboarding in MVP. That adds complexity without improving the demo's core proof.

## 4. Target Users

### 4.1 Donors

- individuals who want trust and visibility
- crypto-native donors who want on-chain proof
- social impact communities and hackathon judges

### 4.2 NGOs / NPOs

- India-based registered nonprofits seeking transparent fundraising
- organizations willing to submit evidence and reports

### 4.3 Admin / Reviewer Team

- internal operators who review NGO onboarding
- humans who approve or reject milestone evidence
- fraud and trust reviewers for edge cases

## 5. Core Product Principles

- transparency first: every important event should have a visible audit trail
- AI assists, humans decide: AI can summarize and flag, but it should not have unchecked authority over money movement
- milestone-based release: donations should not immediately become unrestricted cash
- source-linked claims: every AI-generated statement should link back to evidence
- India-first verification: registry-backed onboarding matters more than broad geography coverage
- fraud resistance over automation: the system should prefer catching suspicious behavior over maximizing instant approvals
- donor-readable UX: blockchain details must be visible without making the product feel like a crypto dashboard

## 6. MVP Scope

The MVP should prove one complete trust loop end to end.

### 6.1 Must Have

- NGO onboarding and profile creation
- NGO verification workflow with NITI Aayog-aware document and registry checks
- campaign creation with funding target and milestones
- donor donation flow
- Algorand escrow contract per campaign or milestone group
- milestone evidence submission by NGO
- admin review dashboard
- public campaign transparency page
- Gemini-generated NGO summary and milestone evidence summary
- fraud flags, evidence references, and confidence status

### 6.2 Nice To Have

- donor leaderboard and supporter badges
- AI chat assistant for campaign Q and A
- cross-campaign impact comparison
- public risk score for campaigns
- email and wallet notifications

### 6.3 Out Of Scope For MVP

- DAO governance
- fully autonomous AI release of escrow funds
- multi-chain support
- token incentives
- large-scale fraud detection models trained in-house
- mobile apps

## 7. Main User Flows

### 7.1 NGO Onboarding Flow

1. NGO signs up.
2. NGO submits organization details, registration IDs, website, and supporting documents.
3. System checks submitted identity details against NITI Aayog and other approved India-specific references.
4. Gemini runs profile summarization, document extraction, website analysis, and mismatch detection.
5. Admin reviews results.
6. NGO receives status: approved, rejected, or needs more info.

### 7.2 Campaign Creation Flow

1. Approved NGO creates a campaign.
2. NGO defines funding goal, project summary, milestone plan, expected completion dates, and proof requirements.
3. Platform deploys or links an Algorand escrow contract.
4. Campaign becomes publicly visible.

### 7.3 Donation Flow

1. Donor browses campaigns.
2. Donor reviews NGO profile, AI summary, milestones, and existing evidence.
3. Donor contributes.
4. Transaction is recorded on-chain and mirrored in the platform database.
5. Donation appears on public campaign timeline.

### 7.4 Milestone Release Flow

1. NGO uploads milestone proof.
2. Gemini extracts text, entities, image context, and external references.
3. Gemini produces a verification summary and flags inconsistencies, duplicate evidence, or suspicious claims.
4. Admin approves or rejects milestone completion.
5. If approved, escrow releases milestone funds.
6. Public page updates with proof, summary, and transaction status.

## 7.5 Fraud Review Flow

1. A verification or milestone submission generates one or more fraud signals.
2. Gemini groups the signals into a reviewer-readable case summary.
3. The system attaches supporting references, extracted quotes, and conflicting fields.
4. Admin decides approve, reject, hold, or request additional proof.
5. The final decision and rationale are written to the audit log.

## 8. Proposed System Architecture

## 8.1 Frontend

- Next.js app for marketing pages, donor dashboard, NGO dashboard, and admin dashboard
- ShadCN UI for core component system
- Three.js used sparingly for landing-page storytelling, not core workflows

Key frontend routes:

- / for public landing page
- /campaigns for campaign discovery
- /campaigns/[slug] for public campaign detail and transparency timeline
- /dashboard/donor for donor activity
- /dashboard/ngo for NGO campaign management
- /dashboard/admin for verification and review operations

## 8.2 Backend

Use Next.js with server actions and route handlers for the main application API, plus background workers for long-running jobs.

Backend domains:

- auth and roles
- NGO onboarding and verification
- campaign and milestone management
- donation recording and reconciliation
- Gemini evidence processing and fraud scoring
- blockchain event sync
- audit logging

## 8.3 Database

- PostgreSQL for transactional data
- Prisma for schema management and query layer

Data should be split into these domains:

- identity and users
- organizations
- campaigns and milestones
- donations and payouts
- Gemini analysis records
- registry match records
- fraud signal records
- evidence assets and references
- audit logs

## 8.4 Blockchain Layer

- Algorand smart contracts for escrow and milestone release
- on-chain records should represent donation receipt, escrow state, and release events
- off-chain platform database should store normalized metadata and link each record to transaction IDs

### Escrow Priorities

- funds should remain locked until milestone approval is complete
- release conditions should be simple enough to audit during the hackathon
- every release should be tied to a milestone record and review decision
- refunded or cancelled campaigns should have a deterministic handling path

## 8.5 AI Layer

Gemini is used across five distinct workflows in this platform. Each has defined inputs, outputs, and reviewer interaction model.

Full workflow specs are in section 22.

AI outputs must always be stored as advisory data, not authoritative truth.

## 8.6 Why Gemini Must Be Highlighted

Gemini is not a decorative add-on in this product. It is one of the core differentiators.

Gemini should be highlighted in the product because it powers:

- NGO verification summaries from messy, multi-source inputs
- fraud signal generation from mismatched registry, document, and public web data
- extraction of structured facts from PDFs, images, and uploaded reports
- donor-readable milestone summaries from raw evidence
- reviewer productivity by turning large evidence packs into actionable decisions

The strongest product message is:

- Algorand provides tamper-resistant fund flow
- Gemini provides intelligence over messy trust signals
- the platform combines both into transparent donation operations

## 9. Recommended Service Boundaries

Even if implemented inside one Next.js repo, keep the code logically separated into modules.

### 9.1 Web App Module

- UI, route handlers, dashboards, public pages

### 9.2 Verification Module

- NITI Aayog lookup and registry checks
- website scraping
- external reference gathering
- Gemini prompt orchestration

### 9.3 Evidence Processing Module

- file upload processing
- OCR and text extraction
- image analysis
- evidence-to-milestone linking

### 9.4 Blockchain Module

- smart contract deployment and interaction
- transaction indexing
- escrow release orchestration

### 9.5 Review Module

- admin review queues
- decision logs
- approval and rejection workflows
- fraud case review workflows

## 10. Initial Data Model

Start with these core entities.

### 10.1 User

- id
- name
- email or wallet address
- role: donor, ngo_member, admin
- createdAt

### 10.2 Organization

- id
- legalName
- publicName
- registrationNumber
- country
- nitiAayogId nullable
- state
- district nullable
- website
- verificationStatus
- verificationSummary
- riskFlags
- createdByUserId

### 10.2.1 OrganizationRegistryMatch

- id
- organizationId
- sourceName
- sourceRecordId
- matchStatus
- matchedFieldsJson
- mismatchedFieldsJson
- fetchedAt

### 10.3 OrganizationDocument

- id
- organizationId
- documentType
- fileUrl
- extractedText
- aiSummary

### 10.4 Campaign

- id
- organizationId
- title
- slug
- summary
- fundingGoal
- escrowAddress or appId
- status
- startDate
- endDate

### 10.5 Milestone

- id
- campaignId
- title
- description
- targetAmount
- dueDate
- orderIndex
- reviewStatus
- payoutTransactionId

### 10.6 Donation

- id
- campaignId
- donorUserId nullable
- donorWalletAddress
- amount
- currency
- blockchainTransactionId
- status
- createdAt

### 10.7 EvidenceSubmission

- id
- milestoneId
- submittedByUserId
- notes
- status
- submittedAt

### 10.8 EvidenceAsset

- id
- evidenceSubmissionId
- fileType
- fileUrl
- extractedText
- imageAnalysisSummary

### 10.9 VerificationRun

- id
- targetType
- targetId
- modelProvider
- promptVersion
- outputSummary
- confidenceScore
- rawReferencesJson
- createdAt

### 10.9.1 FraudSignal

- id
- targetType
- targetId
- signalType
- severity
- summary
- evidenceJson
- status
- createdAt

### 10.10 AuditLog

- id
- actorUserId nullable
- entityType
- entityId
- action
- metadataJson
- createdAt

## 11. Smart Contract Design Direction

Do not start with an overly complex contract system. Keep the first version narrow.

This area is one of the main technical risks in the app. The contract model should be designed to protect donor trust first and feature breadth second.

### Option A: Single Escrow Per Campaign

- all campaign donations flow into one escrow
- admin-approved milestone releases move a defined amount to NGO wallet
- simplest to reason about for MVP

### Option B: Escrow Per Milestone

- milestone budgets are separated more explicitly
- stronger isolation
- more contract and operational complexity

Recommended MVP choice:

- use a single campaign escrow with milestone release tracking off-chain and release approvals enforced by the contract or trusted backend signer model

### 11.1 Escrow Rules For MVP

- donations enter a campaign escrow wallet or contract-controlled account
- each milestone has an approved release amount recorded off-chain and referenced in review logs
- only an authorized release actor can trigger payout after admin approval
- no direct NGO withdrawal path should exist outside the release flow
- every payout must reference campaign ID, milestone ID, and blockchain transaction ID

### 11.2 Exact Milestone Release Workflow

This should be the exact lifecycle for one milestone.

#### Milestone States

- draft: milestone created but campaign not yet published
- active: campaign is live and milestone is waiting for work completion
- submitted: NGO has uploaded proof for review
- under_review: system and reviewers are evaluating the submission
- changes_requested: submission is incomplete or suspicious and needs more proof
- approved: milestone is accepted for payout
- payout_pending: payout request has been created but not yet confirmed on-chain
- paid: milestone payout is confirmed on-chain
- rejected: milestone is denied and cannot be paid in its current submission state

#### Release Flow

1. NGO marks a milestone as complete and uploads a proof package.
2. The system creates an EvidenceSubmission record and stores all uploaded assets.
3. Gemini extracts structured facts from documents, screenshots, invoices, and field images.
4. Gemini compares the proof package against milestone requirements.
5. The system generates fraud signals if there are mismatches, suspicious duplicates, missing required items, or unsupported claims.
6. Milestone status moves to under_review.
7. Admin sees a review screen with:
    - milestone details
    - target payout amount
    - submitted evidence
    - Gemini summary
    - fraud flags
    - registry and campaign context
8. Admin chooses one of four outcomes:
    - approve
    - reject
    - request more proof
    - place on hold for fraud review
9. If approved, the system creates a payout instruction record with an idempotency key.
10. The blockchain module submits the payout transaction to Algorand.
11. Until chain confirmation is received, milestone status remains payout_pending.
12. After confirmation, the system stores the transaction ID, updates the milestone to paid, and writes a public timeline event.
13. If payout submission fails or confirmation times out, the payout remains unresolved and requires reconciliation instead of retrying blindly.

#### Release Gates

Funds should only be released when all of the following are true:

- campaign status is active
- milestone status is approved
- approved amount is less than or equal to milestone allocation
- total campaign paid amount plus new payout does not exceed escrowed balance
- no unresolved fraud hold exists on the milestone or campaign
- payout instruction has not already been executed
- the approver has the required admin role

#### What Is Stored At Release Time

- milestone approval decision
- reviewer ID
- reviewer rationale
- approved payout amount
- payout instruction ID
- idempotency key
- Algorand transaction ID
- chain confirmation timestamp
- audit log entry

### 11.2.1 Advance Funding Milestone Policy (For Large Events)

Some NGO programs require pre-booking costs before the final event can happen. To support this without breaking escrow guarantees, use a controlled two-step release model.

#### Milestone Funding Types

- standard: payout happens after completion proof
- advance_enabled: partial payout allowed before execution, with strict controls

#### Advance Release Rules

- advance payout must be capped by advanceCapPercent for the milestone
- typical cap for MVP: 20% to 40% based on NGO risk tier
- advance release requires pre-execution evidence such as:
    - vendor quotation or proforma invoice
    - booking contract or reservation confirmation
    - timeline and deliverable plan
    - beneficiary or event scope details
- high-value advances should require dual approval (reviewer plus senior reviewer)

#### Two-Step Disbursement Model

1. Step A (pre-event): release only the approved advance amount after pre-booking verification.
2. Step B (post-event): release remaining amount only after completion evidence is verified.

#### Post-Advance Reconciliation Rules

- NGO must submit final invoices and completion proof before a defined deadline
- Gemini compares planned pre-booking amounts versus final billed amounts
- if under-utilized, remaining release is adjusted or carry-forward rules are applied
- if proof is missing or contradictory, future milestone payouts are auto-frozen pending review

#### Risk Tier Policy

- low-risk NGO: higher allowed advance cap within policy limits
- medium-risk NGO: moderate cap with stronger document requirements
- high-risk or newly onboarded NGO: low cap and mandatory additional approvals

#### Additional Audit Fields

- fundingType
- advanceCapPercent
- advanceReleasedAmount
- advanceApprovalBy
- reconciliationStatus
- reconciliationDueDate

### 11.3 Exact Verification Workflow

Verification should happen in two different contexts:

- organization verification during onboarding
- milestone verification during payout review

#### A. Organization Verification

1. NGO submits legal name, public name, registration identifiers, website, state, district, contact details, and support documents.
2. The system normalizes the organization data into a comparable format.
3. A registry lookup job checks NITI Aayog and any approved India-specific verification sources.
4. The system records:
    - exact matches
    - partial matches
    - missing fields
    - conflicting fields
5. Gemini reads the submitted documents and extracts structured facts such as legal name, address, dates, project categories, and signatory details.
6. Gemini analyzes the NGO website and public footprint to summarize activities, project themes, and external trust signals.
7. The system builds a verification packet for admin review containing:
    - submitted details
    - registry match result
    - Gemini summary
    - mismatches and risk flags
    - source references
8. Admin decides approved, rejected, or needs more information.

#### Approval Rules For Organization Verification

- exact or strongly explainable registry alignment should be preferred
- name mismatch, address mismatch, or invalid registration identifiers should force manual review
- missing NITI Aayog presence does not automatically mean fraud, but it should lower trust and require explicit reviewer reasoning
- Gemini output can assist the reviewer but must not approve the NGO on its own

#### B. Milestone Verification

1. Each milestone defines required proof types at campaign creation time.
2. NGO submits proof against those exact requirements.
3. The system checks whether all mandatory proof slots are filled.
4. Gemini extracts facts from the proof package:
    - dates
    - quantities
    - locations
    - named organizations or vendors
    - invoice amounts
    - visual scene descriptions
5. Gemini compares extracted facts against the milestone promise.
6. The system generates a verification summary with:
    - what was claimed
    - what was evidenced
    - what remains unclear
    - what appears contradictory
7. Reviewer inspects the packet and decides whether the milestone is sufficiently proven for payout.

#### Verification Output Categories

Every verification run should end in one of these categories:

- verified_with_low_risk
- verified_with_manual_notes
- insufficient_evidence
- inconsistent_submission
- suspected_fraud

### 11.4 Fraud Prevention Model

Fraud prevention should be built as layered controls, not one AI score.

#### Layer 1: Identity And Registry Controls

- compare NGO data with NITI Aayog and approved registries
- block approval when critical identity fields conflict
- log every unresolved mismatch for reviewer action

#### Layer 2: Campaign Structure Controls

- require milestone budgets to sum to the total campaign goal
- require milestone descriptions to define measurable outputs
- prevent campaigns from being published without proof requirements
- flag unusually large milestones with minimal description

#### Layer 3: Evidence Integrity Controls

- hash uploaded files to detect duplicates across submissions
- detect repeated images or reused documents across milestones
- require document type and proof coverage checks
- compare invoice amounts, dates, and locations against campaign context

#### Layer 4: Gemini Fraud Signals

Gemini should generate human-readable fraud signals such as:

- registry mismatch
- document inconsistency
- unverifiable public claim
- duplicate evidence reuse
- invoice amount conflict
- timeline mismatch
- image-content mismatch
- suspiciously generic proof submission

Each signal should include:

- signal type
- severity
- short explanation
- supporting quote or extracted field
- reference to source asset or source URL

#### Layer 5: Human Review Controls

- any high-severity fraud signal moves the case into explicit reviewer handling
- reviewers must record a disposition for every fraud flag
- payout cannot proceed while a high-severity unresolved signal remains open
- repeat suspicious behavior should raise organization-level risk flags

#### Layer 6: Blockchain And Financial Controls

- payout requests must be idempotent
- escrow balance must be checked before every payout
- total paid amount must never exceed funded amount
- payout reconciliation must compare intended payout and confirmed chain payout
- failed or uncertain chain outcomes must go to manual reconciliation

### 11.5 Recommended Reviewer Decision Policy

For MVP, use a conservative decision matrix.

- low risk plus complete evidence: approve
- moderate risk plus explainable mismatch: request more proof or approve with notes
- high risk or unresolved contradiction: hold or reject
- registry conflict on NGO identity: do not approve without explicit senior review

### 11.6 Public Transparency Output

After each milestone review, donors should see a simplified public status rather than internal reviewer noise.

Publicly visible items:

- milestone status
- amount released
- release date
- Algorand transaction reference
- Gemini-generated evidence summary
- proof attachments that are safe to publish

Internal-only items:

- raw fraud flags
- reviewer deliberation notes
- sensitive NGO onboarding documents
- internal risk scoring details

### 11.7 Smart Contract Threat Model

Primary concerns:

- unauthorized release of escrowed funds
- releasing more than the campaign balance or milestone allocation
- replaying payout operations
- mismatch between on-chain release state and off-chain review state
- operational failure if a payout transaction succeeds on-chain but fails in the app workflow

MVP mitigation direction:

- keep contract logic small and auditable
- keep release conditions deterministic
- maintain a payout ledger table in PostgreSQL with idempotency keys
- reconcile every blockchain event back into the application database
- require explicit admin decision before any release operation is created

## 12. AI Feature Prioritization

### Build Order

| Priority | Workflow | Reason |
|----------|----------|--------|
| 1 | NPO Auto Verification | Blocks onboarding; highest trust value |
| 2 | Web Scraping For Past Activity | Strengthens NGO profile depth |
| 3 | Point Of Contact Extraction | Pre-fills context for reviewers |
| 4 | Milestone Document Verification | Gates every payout |
| 5 | Visual Evidence Counting (VLM) | Strongest fraud differentiator, most novel |

Full specifications for all five workflows are in section 22.

## 13. External Integrations

### 13.1 Required

- Algorand SDK and smart contract tooling
- Gemini API
- PostgreSQL
- object storage for uploaded files

### 13.2 Likely Needed

- auth provider such as Clerk, Auth.js, or Supabase Auth
- OCR service if Gemini alone is insufficient
- background job system such as Trigger.dev, Inngest, or BullMQ
- indexing and search for campaigns and evidence

## 14. Security And Trust Requirements

- no AI output should trigger fund release without human approval in MVP
- all payout decisions must be audit-logged
- uploaded documents and images must be access-controlled
- public pages must redact sensitive onboarding documents
- blockchain transaction IDs must be cross-checked before marking payments final
- every AI-generated claim shown to users should include source references or a note that references were unavailable
- admin actions need role-based access control
- NITI Aayog or registry mismatch should force manual review before NGO approval
- fraud signals should never be silently discarded; reviewer disposition must be captured

## 15. Suggested Build Phases

### Phase 0: Foundation

- initialize Next.js app
- set up database, Prisma, auth, and base UI
- define user roles and route protection

### Phase 1: NGO Verification

- NGO profile creation
- document upload
- NITI Aayog match pipeline
- basic verification queue
- Gemini-generated verification summary and fraud signals
- admin approval flow

### Phase 2: Campaign And Escrow

- campaign creation form
- milestone definition
- Algorand escrow setup
- public campaign pages

### Phase 3: Donation And Tracking

- donor donation flow
- transaction recording
- donor dashboard
- public transaction timeline

### Phase 4: Evidence And Review

- milestone evidence submission
- Gemini document and image analysis
- reviewer dashboard
- fraud case handling states
- approved payout release flow

### Phase 5: Transparency Layer

- public campaign progress timeline
- evidence summaries with sources
- donor-readable impact reports

## 16. Hackathon-Friendly Demo Scope

If this is for a hackathon, narrow the demo to one compelling story:

- onboard one NGO
- show NITI Aayog-backed verification result for that NGO
- create one campaign with three milestones
- simulate one donor payment
- upload one milestone proof pack with images and documents
- show Gemini summary, fraud checks, and reviewer approval
- release milestone funds through Algorand escrow
- display the public transparency timeline end to end

That is enough to communicate the full value proposition without overbuilding.

## 17. Suggested Folder Direction

If you keep this as a single repo, a good starting structure is:

```text
app/
components/
features/
    auth/
    organizations/
    campaigns/
    donations/
    verification/
    evidence/
    blockchain/
    admin/
lib/
    db/
    ai/
    algorand/
    storage/
prisma/
contracts/
```

## 18. Open Product Decisions

These need to be decided early because they affect architecture.

- will donors pay in fiat, crypto, or both
- will donations be custodial or wallet-native only
- who has authority to approve milestone release: single admin, NGO plus admin multisig, or committee
- what evidence formats are accepted in MVP: images, PDFs, links, CSVs, videos
- will campaigns be curated manually or open to all verified NGOs
- which India-specific registries beyond NITI Aayog are required in MVP

## 19. Success Metrics

For a first release, track:

- number of approved NGOs
- number of campaigns launched
- donation conversion rate on campaign pages
- percentage of donations tied to visible milestone status
- review turnaround time for evidence submissions
- percentage of AI summaries accepted by reviewers with minimal edits
- donor trust indicators such as repeat donation rate

## 20. Recommended Next Steps

1. Freeze the MVP around one donor-to-milestone transparency flow.
2. Lock India-first verification around NITI Aayog and define fallback rules when a registry match is missing.
3. Design the campaign, milestone, donation, and evidence schema in Prisma.
4. Define the Algorand escrow contract responsibilities and payout reconciliation rules.
5. Build the Gemini verification and fraud review workflow before expanding secondary AI features.
6. Treat Gemini as a verification and fraud-assistance layer, not an autonomous approver.

## 21. Practical Recommendation

The strongest version of this app is not "donations on blockchain" by itself.

The strongest version is:

- verified NGO identity
- milestone-based escrow
- public evidence trail
- Gemini-assisted fraud detection and proof review with references

That combination is what makes the idea credible and differentiated.

---

## 22. Gemini Workflow Design Specifications

This section defines the exact inputs, outputs, prompt intent, Gemini capabilities used, storage targets, and failure handling for every AI job in the platform.

---

### Workflow 1: NPO Auto Verification

#### Purpose

When an NGO submits its onboarding profile, automatically analyze all submitted data and generate a structured verification summary for the admin reviewer.

#### Gemini Capabilities Used

- document understanding for uploaded PDFs and scanned certificates
- text reasoning for cross-field consistency checks
- structured output / JSON mode for machine-readable results

#### Inputs

- organization legal name
- public name or alias
- registration number
- state and district
- NITI Darpan ID if provided
- submitted document files: registration certificate, PAN, trust deed, MOU, activity report
- website URL
- optional social media links

#### Prompt Intent

Ask Gemini to act as a verification analyst. Provide all submitted text and documents in context. Instruct it to:

1. Extract legal name, address, registration details, and founding date from documents.
2. Compare extracted fields against the submitted form data and flag every mismatch.
3. Identify whether the documents are consistent with each other in entity name, address, and date range.
4. List what is confirmed, what is inconsistent, and what is missing.
5. Return a structured JSON with a verification_summary string, a list of matched_fields, a list of mismatched_fields with explanation, a list of missing_fields, and an overall confidence category.

#### Output Schema

```json
{
  "verification_summary": "string",
  "matched_fields": ["string"],
  "mismatched_fields": [
    { "field": "string", "submitted": "string", "extracted": "string", "explanation": "string" }
  ],
  "missing_fields": ["string"],
  "confidence": "high | medium | low | suspected_fraud",
  "fraud_signals": [
    { "signal_type": "string", "severity": "high | medium | low", "explanation": "string" }
  ]
}
```

#### Storage Targets

- VerificationRun row with full output JSON
- Organization.verificationSummary updated with human-readable summary
- FraudSignal rows created for each flagged item
- OrganizationRegistryMatch row updated with matched and mismatched field lists

#### Failure Handling

- if Gemini returns no parseable JSON: store raw text, mark run as needs_manual_review
- if document text extraction fails: fall back to form-only comparison with lower confidence
- never block admin from reviewing even if Gemini call fails

---

### Workflow 2: Web Scraping For Past NGO Events And Contributions

#### Purpose

Build a richer trust picture by gathering evidence of the NGO's real-world activity from public web sources beyond what they self-submitted.

#### Gemini Capabilities Used

- grounding with Google Search to fetch live public information
- web content summarization
- entity and event extraction
- citation and reference linking

#### Inputs

- NGO legal name
- public name
- website URL
- state and sector such as health, education, food relief

#### Prompt Intent

Ask Gemini with grounding enabled to search for the NGO's public presence and return:

1. A list of public references found: news articles, NGO directories, government scheme beneficiary lists, social media posts.
2. A summary of identified events conducted by this NGO with dates, locations, and scale if available.
3. Any named projects or programs with public references.
4. Any negative mentions, legal flags, or complaints visible in public sources.
5. Confidence that the references actually correspond to this specific NGO rather than a name match.

#### Output Schema

```json
{
  "public_references": [
    { "title": "string", "url": "string", "date": "string", "relevance": "string" }
  ],
  "identified_events": [
    { "event_name": "string", "date": "string", "location": "string", "scale": "string", "source_url": "string" }
  ],
  "programs_mentioned": ["string"],
  "negative_mentions": [
    { "description": "string", "source_url": "string", "date": "string" }
  ],
  "entity_match_confidence": "confirmed | probable | ambiguous | no_match"
}
```

#### Storage Targets

- VerificationRun row linked to organization with type web_scrape
- public_references and identified_events persisted as JSON for reviewer display
- negative_mentions trigger FraudSignal rows with severity set by count and nature

#### Notes

- Gemini grounding returns live search results, so results should be re-fetched if the organization updates or reapplies after rejection.
- Display source URLs in the admin review panel so reviewers can click through.
- Always display entity_match_confidence to reviewers because a name collision is a real risk.

#### Failure Handling

- if no references found: store zero-result response and note in summary that no public activity was verified
- if grounding is disabled or unavailable: mark run as search_unavailable but do not block review

---

### Workflow 3: NGO Point Of Contact Extraction

#### Purpose

Extract or infer key contact and leadership details from submitted documents and public web sources to help reviewers validate the organization's leadership structure and reachability.

#### Gemini Capabilities Used

- document understanding for PDFs and certificates
- named entity recognition for persons, roles, and contact details
- grounding for public directory cross-reference

#### Inputs

- all submitted organization documents
- website URL
- trust deed or MOU text if available

#### Prompt Intent

Ask Gemini to extract the following from submitted documents and the organization website:

1. Named trustees, directors, or governing body members with roles.
2. Primary contact person name and role.
3. Email addresses, phone numbers, and physical addresses visible in documents.
4. Any government scheme or grant registration details linking people to this organization.
5. Flag if no named individuals are identifiable, which is a risk signal.

#### Output Schema

```json
{
  "governing_members": [
    { "name": "string", "role": "string", "source": "document | website | web_search" }
  ],
  "primary_contact": {
    "name": "string",
    "role": "string",
    "email": "string",
    "phone": "string"
  },
  "addresses": ["string"],
  "grant_references": [
    { "scheme_name": "string", "reference_id": "string", "source": "string" }
  ],
  "no_named_individuals_flag": true
}
```

#### Storage Targets

- stored as extractedContactJson on the Organization record
- displayed in admin review panel alongside submitted details
- no_named_individuals_flag generates a FraudSignal with medium severity

#### Failure Handling

- if extraction returns no names: flag for manual review and do not block onboarding
- never store contact details in publicly visible parts of the platform

---

### Workflow 4: Milestone Document Verification

#### Purpose

When an NGO submits milestone proof, analyze all uploaded documents to confirm the submitted evidence actually matches the milestone's stated objective and expected deliverables.

#### Gemini Capabilities Used

- document understanding for invoices, receipts, reports, and signed letters
- structured data extraction
- cross-document consistency reasoning
- text grounding for date and amount checks

#### Inputs

- milestone title and description
- declared milestone target and deliverable as written by NGO at campaign creation
- all uploaded documents in the evidence submission
- campaign context including organization name, sector, and project summary

#### Prompt Intent

Ask Gemini to act as a milestone reviewer. Provide it with the milestone promise and all submitted documents. Instruct it to:

1. Extract key facts from every document: date, amount, vendor name, item description, quantity, location, signature, authorizing body.
2. Check whether the extracted facts are consistent with the milestone promise.
3. Identify what is proven, what is unverified, and what contradicts the claim.
4. Check whether invoice dates fall within the expected milestone window.
5. Check whether invoice totals match the milestone allocation or are significantly over or under.
6. Flag if documents appear to be generic or reused from another submission.
7. Return a structured summary and list of fraud signals.

#### Output Schema

```json
{
  "milestone_summary": "string",
  "extracted_facts": [
    {
      "document": "string",
      "date": "string",
      "amount": "string",
      "vendor": "string",
      "items": "string",
      "location": "string",
      "authorizing_body": "string"
    }
  ],
  "what_is_proven": ["string"],
  "what_is_unverified": ["string"],
  "what_contradicts": ["string"],
  "invoice_date_within_window": true,
  "invoice_total_matches_allocation": true,
  "generic_document_flag": false,
  "verification_category": "verified_with_low_risk | verified_with_manual_notes | insufficient_evidence | inconsistent_submission | suspected_fraud",
  "fraud_signals": [
    { "signal_type": "string", "severity": "high | medium | low", "explanation": "string", "source_document": "string" }
  ]
}
```

#### Storage Targets

- VerificationRun row of type milestone_document linked to EvidenceSubmission
- extracted_facts stored per EvidenceAsset
- fraud_signals create FraudSignal rows
- verification_category written to EvidenceSubmission.status

#### Failure Handling

- if document upload fails text extraction: flag asset as extraction_failed and continue with remaining assets
- if all documents fail extraction: mark submission as needs_manual_review and halt auto-analysis
- always provide reviewer with partial results even if some documents failed

---

### Workflow 5: Visual Evidence Verification Using VLM (Image Analysis)

#### Purpose

Analyze field photos, event images, and activity shots using Gemini's vision capability to confirm whether what is shown is consistent with what was claimed. For mass-delivery programs like food distribution, count or estimate quantities visible in images.

#### Gemini Capabilities Used

- vision and image understanding
- object detection and counting
- scene and context analysis
- multimodal reasoning across image plus document pairs

#### Inputs

- image files uploaded in the evidence submission
- milestone title and description
- declared event type such as food distribution, blood donation, plantation drive, medical camp
- optional invoice or manifest with declared quantities

#### Prompt Intent

Ask Gemini with the image and milestone context to:

1. Describe what is visible in the image in factual terms: setting, number of people, items present, visible branding or signage.
2. Infer the event type from visual content and check whether it matches the declared event type.
3. For countable items such as food packets, boxes, beneficiary groups, trees planted, or medical kits: provide a count or estimate with confidence.
4. Compare the visual count or presence against the declared quantity in the invoice or milestone description.
5. Flag if the image shows generic, irrelevant, or stock-photo-like content that does not match a real field activity.
6. Flag if images appear staged, reused, or inconsistent with the stated geography or context.

#### Output Schema

```json
{
  "image_description": "string",
  "inferred_event_type": "string",
  "event_type_match": true,
  "visible_items": [
    { "item": "string", "estimated_count": 0, "confidence": "high | medium | low" }
  ],
  "declared_quantity": 0,
  "count_matches_declaration": true,
  "count_discrepancy_note": "string",
  "image_quality_flags": {
    "appears_generic": false,
    "appears_reused": false,
    "context_mismatch": false,
    "explanation": "string"
  },
  "fraud_signals": [
    { "signal_type": "string", "severity": "high | medium | low", "explanation": "string" }
  ]
}
```

#### Specific Event Type Handling

For food distribution:
- count visible food packets, boxes, or distribution containers
- check for queues, staffing, branding, and setting consistency
- compare count estimate to invoice quantity

For medical camps:
- identify medical equipment, tables, chairs, or staff in uniforms
- check for patient presence or beneficiary queues
- note any registration or ID checking activity visible

For plantation drives:
- count saplings or planted areas visible
- check for consistent soil conditions or natural context
- note if geo-tagging or GPS metadata is present in the image

For educational programs:
- check for classroom or outdoor session setting
- estimate visible student or beneficiary count
- check for learning materials or instructional content

#### Storage Targets

- image analysis JSON stored as imageAnalysisSummary on EvidenceAsset
- visible_items and count_discrepancy written to summary
- image_quality_flags generate FraudSignal rows if any flag is true
- combined document plus image analysis used to produce final milestone verification_category

#### Failure Handling

- if image is corrupt, too small, or unreadable: flag asset as unanalyzable and note in summary
- if Gemini cannot determine event type: mark inferred_event_type as unknown and flag for manual review
- always combine image evidence with document evidence before deciding final category

---

### Workflow Integration Summary

| Workflow | Trigger | Gemini Mode | Output Action |
|----------|---------|-------------|---------------|
| NPO Auto Verification | Profile submitted | Text + document | VerificationRun + FraudSignals |
| Web Scraping | After profile submitted | Grounded search | Public reference list + web VerificationRun |
| Contact Extraction | During onboarding | Document + web | Contact JSON on Organization |
| Milestone Document Verification | Evidence submission | Document reasoning | EvidenceSubmission category + FraudSignals |
| Visual VLM Verification | Evidence submission with images | Vision + multimodal | EvidenceAsset imageAnalysis + FraudSignals |

All five outputs feed the reviewer panel. No workflow has authority to approve or deny by itself.
