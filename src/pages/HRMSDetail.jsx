import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./HRMSDetail.css";

const HRMSDetail = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <div className="hrms-page">

            {/* ── HERO ── */}
            <section className="hrms-hero">
                <div className="hrms-hero-inner">
                    <Link to="/" className="hrms-back">← Back to Work</Link>
                    <div className="hrms-tags-row">
                        <span className="hrms-tag hrms-tag-accent">Self-Initiated</span>
                        <span className="hrms-tag">UI/UX Design</span>
                        <span className="hrms-tag">Frontend Dev</span>
                        <span className="hrms-tag">HTML · CSS · JS</span>
                    </div>
                    <h1 className="hrms-hero-title">
                        Allyted <span className="hrms-accent">HRMS</span>
                    </h1>
                    <p className="hrms-hero-tagline">Human Resource Management System</p>
                    <p className="hrms-hero-sub">
                        A complete internal HR management system — designed, built, and shipped for an entire company. From a real problem to a live product.
                    </p>
                    <div className="hrms-meta-grid">
                        <div className="hrms-meta-item">
                            <span className="hrms-meta-label">My Role</span>
                            <span className="hrms-meta-value">UI/UX Designer + Frontend Dev</span>
                        </div>
                        <div className="hrms-meta-item">
                            <span className="hrms-meta-label">Type</span>
                            <span className="hrms-meta-value">Internal Self-Initiated</span>
                        </div>
                        <div className="hrms-meta-item">
                            <span className="hrms-meta-label">Platform</span>
                            <span className="hrms-meta-value">Web Application</span>
                        </div>
                        <div className="hrms-meta-item">
                            <span className="hrms-meta-label">Tools</span>
                            <span className="hrms-meta-value">Figma + HTML/CSS/JS</span>
                        </div>
                        <div className="hrms-meta-item">
                            <span className="hrms-meta-label">Live</span>
                            <a href="https://allytedhrms.cloud" target="_blank" rel="noreferrer" className="hrms-meta-link">allytedhrms.cloud ↗</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HERO IMAGE ── */}
            <div className="hrms-hero-img">
                <img
                    src="/images/hrmsadmin-manager/Admin dashboard.png"
                    alt="Allyted HRMS Dashboard"
                    className="hrms-hero-img-full"
                />
            </div>

            {/* ── 01 OVERVIEW ── */}
            <section className="hrms-section hrms-white">
                <div className="hrms-inner">
                    <div className="hrms-section-label">01 — Project Overview</div>
                    <h2 className="hrms-heading">
                        <span className="hrms-accent">Project Overview</span>
                    </h2>
                    <p className="hrms-body">
                        Allyted HRMS is an internal Human Resource Management System built for Allyted Solutions. It centralizes all employee HR services — attendance tracking, leave management, reimbursements, payslips, assets, and more — into one unified web application used by every employee from the CEO to junior staff.
                    </p>

                    <div className="hrms-self-box">
                        <p>
                            This was a <strong className="hrms-accent">self-initiated project.</strong> I noticed real problems my colleagues were facing daily, proposed the solution to management, designed all screens in Figma, and co-developed the frontend. The app is now live and actively used by the entire team.
                        </p>
                    </div>

                    <div className="hrms-stats">
                        <div className="hrms-stat">
                            <span className="hrms-stat-num">17</span>
                            <span className="hrms-stat-label">Modules Designed</span>
                        </div>
                        <div className="hrms-stat">
                            <span className="hrms-stat-num">3</span>
                            <span className="hrms-stat-label">User Roles</span>
                        </div>
                        <div className="hrms-stat">
                            <span className="hrms-stat-num">100<span className="hrms-stat-plus">%</span></span>
                            <span className="hrms-stat-label">Team Adoption</span>
                        </div>
                        <div className="hrms-stat">
                            <span className="hrms-stat-num">₹0</span>
                            <span className="hrms-stat-label">Vendor Cost</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 02 PROBLEM ── */}
            <section className="hrms-section hrms-dark">
                <div className="hrms-inner">
                    <div className="hrms-section-label">02 — The Problem</div>
                    <h2 className="hrms-heading">
                        Real problems. <span className="hrms-accent">Real people.</span>
                    </h2>
                    <p className="hrms-body">
                        Before the HRMS existed, the entire company managed HR processes manually. As someone working in the office every day, I observed firsthand what my colleagues struggled with.
                    </p>

                    <div className="hrms-problem-grid">
                        {[
                            { icon: "📧", title: "Leave via email", desc: "Employees wrote emails to apply leave. No tracking, no confirmation. Salary processor had to call everyone to check LOPs before processing salary." },
                            { icon: "📊", title: "No attendance tracking", desc: "No way to track who came on time, who left early. Marking half days was manual and inconsistent. No data meant no accountability." },
                            { icon: "💬", title: "WhatsApp reimbursements", desc: "Employees sent screenshots of bills on WhatsApp to get reimbursed. Finance tracked manually — causing weeks of delay." },
                            { icon: "🤷", title: "No leave balance visibility", desc: "Employees had no way to check remaining leave balance. They found out about Loss of Pay only when salary was processed." },
                            { icon: "📅", title: "No holiday list", desc: "Employees didn't know upcoming holidays without asking HR. No central always-accessible holiday calendar existed." },
                            { icon: "💻", title: "No asset tracking", desc: "When company assets were given to employees, there was no formal tracking system. No one knew what was assigned to whom." },
                        ].map((p, i) => (
                            <div key={i} className="hrms-problem-card">
                                <div className="hrms-problem-icon">{p.icon}</div>
                                <h4>{p.title}</h4>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="hrms-trigger-box">
                        💡 Management had considered using Kredily — an external HR tool — but rejected it due to startup costs. I saw the opportunity and proposed building our own internal tool. He approved. I designed everything in Figma and co-developed the frontend.
                    </div>
                </div>
            </section>

            {/* ── 03 USERS ── */}
            <section className="hrms-section hrms-dark">
                <div className="hrms-inner">
                    <div className="hrms-section-label">03 — Understanding the Users</div>
                    <h2 className="hrms-heading">
                        Three roles. <span className="hrms-accent">One system.</span>
                    </h2>
                    <p className="hrms-body">
                        Everyone logs into the same portal — but sees a completely different experience based on their role. I designed for three distinct users, each with different goals, permissions, and daily workflows.
                    </p>
                </div>

                <div className="hrms-personas-grid">
                    {[
                        {
                            initial: "E",
                            name: "Employee",
                            role: "All Staff",
                            goal: "Access HR services — leaves, attendance, payslips — without chasing anyone.",
                            needs: ["Apply leaves & check balance instantly", "Track attendance & reimbursements", "View payslips and company holidays"],
                            pain: "Found out about salary deductions only at month end.",
                        },
                        {
                            initial: "TL",
                            name: "Team Lead",
                            role: "Approver",
                            goal: "Stay on top of team availability and handle approvals without email chaos.",
                            needs: ["See who's in, who's on leave, who's late", "Approve / reject / escalate leave requests", "Monitor team attendance at a glance"],
                            pain: "No visibility into team attendance without asking HR individually.",
                        },
                        {
                            initial: "A",
                            name: "HR / Admin",
                            role: "Super Admin",
                            goal: "Run the entire company's HR operations from one place — zero manual effort.",
                            needs: ["Manage employees, roles & departments", "Process reimbursements & payslips", "Configure holidays, assets, services"],
                            pain: "Called every employee before salary processing to check LOPs.",
                        },
                    ].map((p, i) => (
                        <div key={i} className="hrms-persona-col">
                            <div className="hrms-persona-card-new">
                                <div className="hrms-persona-header-new">
                                    <div className="hrms-persona-avatar">{p.initial}</div>
                                    <div>
                                        <h4 className="hrms-persona-name">{p.name}</h4>
                                        <p className="hrms-persona-role">{p.role}</p>
                                    </div>
                                </div>
                                <div className="hrms-persona-body-new">
                                    <p className="hrms-persona-goal">{p.goal}</p>
                                    <span className="hrms-persona-label" style={{ marginTop: "18px", display: "block" }}>Needs</span>
                                    <ul className="hrms-persona-list">
                                        {p.needs.map((n, j) => <li key={j}>{n}</li>)}
                                    </ul>
                                    <div className="hrms-persona-pain">
                                        <span className="hrms-persona-pain-label">Pain Point</span>
                                        <p>{p.pain}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── 04 USER FLOWS ── */}
            <section className="hrms-section hrms-dark">
                <div className="hrms-inner">
                    <div className="hrms-section-label">04 — User Flows</div>
                    <h2 className="hrms-heading">
                        Mapping the <span className="hrms-accent">User Flows</span>
                    </h2>
                    <p className="hrms-body">
                        Before designing a single screen, I mapped the five most critical task flows across all three roles. These flows directly shaped every screen, form, and edge case in the final product.
                    </p>
                </div>

                {/* Flow 01 */}
                <div className="hrms-flow-block">
                    <div className="hrms-flow-content">
                        <span className="hrms-flow-num">Flow 01</span>
                        <h3 className="hrms-flow-title">Employee <span className="hrms-accent">Applies for Leave</span></h3>
                        <div className="hrms-flow-callout-single">
                            <span className="hrms-flow-callout-label">Key Design Decision</span>
                            <p>If the employee has no leave balance, the system doesn't just reject them — it surfaces a Loss of Pay (LOP) option mid-flow, letting them make an informed choice before submitting.</p>
                        </div>
                    </div>
                    <div className="hrms-flow-img-wrap">
                        <img src="/images/hrmsflow/flow-01-leave.png" alt="Flow 01 - Employee Applies for Leave" className="hrms-flow-img" />
                    </div>
                </div>

                {/* Flow 02 */}
                <div className="hrms-flow-block">
                    <div className="hrms-flow-content">
                        <span className="hrms-flow-num">Flow 02</span>
                        <h3 className="hrms-flow-title">Employee <span className="hrms-accent">Clocks In / Out</span></h3>
                        <div className="hrms-flow-callout-single">
                            <span className="hrms-flow-callout-label">Key Design Decision</span>
                            <p>Clock-out doesn't just record time — the system immediately calculates total working hours and auto-marks a half day if the employee worked under 8.5 hours. No manager input needed.</p>
                        </div>
                    </div>
                    <div className="hrms-flow-img-wrap">
                        <img src="/images/hrmsflow/flow-02-attendance.png" alt="Flow 02 - Clock In Out" className="hrms-flow-img" />
                    </div>
                </div>

                {/* Flow 03 */}
                <div className="hrms-flow-block">
                    <div className="hrms-flow-content">
                        <span className="hrms-flow-num">Flow 03</span>
                        <h3 className="hrms-flow-title">Employee <span className="hrms-accent">Applies Reimbursement</span></h3>
                        <div className="hrms-flow-callout-single">
                            <span className="hrms-flow-callout-label">Key Design Decision</span>
                            <p>Reimbursements previously arrived via WhatsApp screenshots with no tracking. This flow formalizes the entire process — employee submits with receipt upload, HR reviews and processes payment.</p>
                        </div>
                    </div>
                    <div className="hrms-flow-img-wrap">
                        <img src="/images/hrmsflow/flow-03-reimbursement.png" alt="Flow 03 - Reimbursement" className="hrms-flow-img" />
                    </div>
                </div>

                {/* Flow 04 */}
                <div className="hrms-flow-block">
                    <div className="hrms-flow-content">
                        <span className="hrms-flow-num">Flow 04</span>
                        <h3 className="hrms-flow-title">Admin <span className="hrms-accent">Creates New Employee</span></h3>
                        <div className="hrms-flow-callout-single">
                            <span className="hrms-flow-callout-label">Key Design Decision</span>
                            <p>Admin fills the employee form and the system auto-generates login credentials on creation. New joiner can log in immediately with their default credentials. No back-and-forth between HR and IT.</p>
                        </div>
                    </div>
                    <div className="hrms-flow-img-wrap">
                        <img src="/images/hrmsflow/flow-04-new-employee.png" alt="Flow 04 - Admin Creates Employee" className="hrms-flow-img" />
                    </div>
                </div>

                {/* Flow 05 */}
                <div className="hrms-flow-block">
                    <div className="hrms-flow-content">
                        <span className="hrms-flow-num">Flow 05</span>
                        <h3 className="hrms-flow-title">Leave Request <span className="hrms-accent">Approval Flow</span></h3>
                        <div className="hrms-flow-callout-single">
                            <span className="hrms-flow-callout-label">Key Design Decision</span>
                            <p>The approval flow has three outcomes — Approve, Reject, or Forward to Manager. If a Team Lead is unsure, they can forward it up rather than guessing. Each action triggers an instant notification to the employee.</p>
                        </div>
                    </div>
                    <div className="hrms-flow-img-wrap">
                        <img src="/images/hrmsflow/flow-05-approval.png" alt="Flow 05 - Leave Approval" className="hrms-flow-img" />
                    </div>
                </div>

            </section>

            {/* ── 05 EMPLOYEE SCREENS ── */}
            <section className="hrms-section hrms-white">
                <div className="hrms-inner">
                    <div className="hrms-section-label">05 — Employee Screens</div>
                    <h2 className="hrms-heading">
                        Employee <span className="hrms-accent">Experience</span>
                    </h2>
                    <p className="hrms-body">
                        Every module was designed with simplicity in mind — flat navigation, icon grid dashboard, and role-based access so each employee sees only what's relevant to them.
                    </p>
                </div>

                {/* Dashboard — full width */}
                <div className="hrms-screen-block">
                    <div className="hrms-screen-label-row">
                        <span className="hrms-screen-pill">Employee Dashboard</span>
                    </div>
                    <div className="hrms-screen-frame">
                        <img src="/images/hrmsemployee/Employeedashboard.png" alt="Employee Dashboard" className="hrms-screen-img-full" />
                    </div>
                </div>

                {/* Attendance — full width */}
                <div className="hrms-screen-block">
                    <div className="hrms-screen-label-row">
                        <span className="hrms-screen-pill">My Attendance</span>
                    </div>
                    <div className="hrms-screen-frame">
                        <img src="/images/hrmsemployee/myattendance.png" alt="My Attendance" className="hrms-screen-img-full" />
                    </div>
                </div>

                {/* Leave Flow narrative */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro">
                        <span className="hrms-subsection-label">Leave Request Flow</span>
                        <p>When an employee applies for leave, the system shows balance upfront before they fill anything. If balance runs out, the system surfaces a Loss of Pay option — the employee consciously chooses LOP instead of being silently deducted at salary time.</p>
                    </div>
                </div>

                {/* Step 1 — full width */}
                <div className="hrms-screen-block">
                    <div className="hrms-screen-label-row">
                        <span className="hrms-screen-pill">Step 1 — Request Leave Form</span>
                        <span className="hrms-screen-note">Balance shown before the form. Employee knows exactly what they have.</span>
                    </div>
                    <div className="hrms-screen-frame">
                        <img src="/images/hrmsemployee/requestleave.png" alt="Request Leave" className="hrms-screen-img-full" />
                    </div>
                </div>

                {/* Step 2 + 3 — equal pair */}
                <div className="hrms-inner">
                    <div className="hrms-screen-pair">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Step 2 — Select Dates</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/selectingdates.png" alt="Selecting Dates" className="hrms-screen-img-full" />
                            </div>
                            <p className="hrms-screen-caption">Date picker with quick shortcuts</p>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Step 3 — Choose Leave Type</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/selectingleavetypes.png" alt="Leave Types" className="hrms-screen-img-full" />
                            </div>
                            <p className="hrms-screen-caption">Per-day leave type selection</p>
                        </div>
                    </div>
                </div>

                {/* No balance — full width */}
                <div className="hrms-screen-block">
                    <div className="hrms-screen-label-row">
                        <span className="hrms-screen-pill">No Leave Balance — What Happens?</span>
                        <span className="hrms-screen-note">Instead of rejecting silently, the system shows this warning and offers LOP as a conscious choice.</span>
                    </div>
                    <div className="hrms-screen-frame">
                        <img src="/images/hrmsemployee/noleavebalancepage.png" alt="No Leave Balance" className="hrms-screen-img-full" />
                    </div>
                </div>

                {/* LOP pair */}
                <div className="hrms-inner">
                    <div className="hrms-screen-pair">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Selecting Loss of Pay</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/selectingLop.png" alt="LOP Selection" className="hrms-screen-img-full" />
                            </div>
                            <p className="hrms-screen-caption">Employee consciously selects LOP</p>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">LOP Confirmed</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/LOP Selected.png" alt="LOP Selected" className="hrms-screen-img-full" />
                            </div>
                            <p className="hrms-screen-caption">Required balance drops to 0 — ready to submit</p>
                        </div>
                    </div>
                </div>

                {/* My Leaves — full width */}
                <div className="hrms-screen-block">
                    <div className="hrms-screen-label-row">
                        <span className="hrms-screen-pill">My Leaves</span>
                    </div>
                    <div className="hrms-screen-frame">
                        <img src="/images/hrmsemployee/leaves.png" alt="My Leaves" className="hrms-screen-img-full" />
                    </div>
                </div>

                {/* Holidays — full width */}
                <div className="hrms-screen-block">
                    <div className="hrms-screen-label-row">
                        <span className="hrms-screen-pill">Holiday Calendar</span>
                    </div>
                    <div className="hrms-screen-frame">
                        <img src="/images/hrmsemployee/Holidaysemployeeview.png" alt="Holidays" className="hrms-screen-img-full" />
                    </div>
                </div>

                {/* Reimbursements */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro">
                        <span className="hrms-subsection-label">Reimbursements</span>
                        <p>No more WhatsApp screenshots. Employees submit requests directly in the app with receipt upload, amount, and category. Status is tracked live.</p>
                    </div>
                    <div className="hrms-screen-pair">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Reimbursements List</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/Reimbursement.png" alt="Reimbursements List" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Create Reimbursement</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/Reimbursementform.png" alt="Create Reimbursement" className="hrms-screen-img-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payslips */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro">
                        <span className="hrms-subsection-label">Payslips</span>
                    </div>
                    <div className="hrms-screen-pair">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Payslips List</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/payslips.png" alt="Payslips" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Request Payslip</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/requestpayslipform.png" alt="Request Payslip" className="hrms-screen-img-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Resignation */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro">
                        <span className="hrms-subsection-label">Resignation</span>
                    </div>
                    <div className="hrms-screen-pair">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Resignations List</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/Resignation.png" alt="Resignations" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Submit Resignation</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/resignationform.png" alt="Submit Resignation" className="hrms-screen-img-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro">
                        <span className="hrms-subsection-label">Services / Accessories</span>
                    </div>
                    <div className="hrms-screen-trio">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">My Service Requests</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/servicerequest.png" alt="My Service Requests" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Accessories Catalog</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/servicerequestaccessories.png" alt="Accessories" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Request Service</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsemployee/servicerequestpopup.png" alt="Service Request Popup" className="hrms-screen-img-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learnings — full width */}
                <div className="hrms-screen-block">
                    <div className="hrms-screen-label-row">
                        <span className="hrms-screen-pill">Learnings</span>
                    </div>
                    <div className="hrms-screen-frame">
                        <img src="/images/hrmsemployee/Learnings.png" alt="Learnings" className="hrms-screen-img-full" />
                    </div>
                </div>

            </section>

            {/* ── 06 TEAM LEAD / MANAGER SCREENS ── */}
            <section className="hrms-section hrms-dark">
                <div className="hrms-inner">
                    <div className="hrms-section-label">06 — Team Lead &amp; Manager Screens</div>
                    <h2 className="hrms-heading">
                        Team Lead &amp; Manager <span className="hrms-accent">Experience</span>
                    </h2>
                    <p className="hrms-body">
                        Team Leads and Managers don't manage the system — they manage their people. Their view is focused entirely on team visibility: who is working, who is on leave, who is late, and pending approvals that need action.
                    </p>
                </div>

                {/* Manager Dashboard — full width */}
                <div className="hrms-screen-block hrms-screen-block-dark">
                    <div className="hrms-screen-label-row hrms-screen-label-row-dark">
                        <span className="hrms-screen-pill hrms-screen-pill-dark">Manager Dashboard</span>
                        <span className="hrms-screen-note hrms-screen-note-dark">Team snapshot — attendance, pending approvals, leave status at a glance.</span>
                    </div>
                    <div className="hrms-screen-frame hrms-screen-frame-dark">
                        <img src="/images/hrmsadmin-manager/managerdashboard.png" alt="Manager Dashboard" className="hrms-screen-img-full" />
                    </div>
                </div>

                {/* Team Attendance — full width */}
                <div className="hrms-screen-block hrms-screen-block-dark">
                    <div className="hrms-screen-label-row hrms-screen-label-row-dark">
                        <span className="hrms-screen-pill hrms-screen-pill-dark">Team Attendance View</span>
                        <span className="hrms-screen-note hrms-screen-note-dark">Who clocked in, who is late, who is absent — live across the entire team.</span>
                    </div>
                    <div className="hrms-screen-frame hrms-screen-frame-dark">
                        <img src="/images/hrmsadmin-manager/allEmployeesattendance.png" alt="All Employees Attendance" className="hrms-screen-img-full" />
                    </div>
                </div>

                {/* Leave Approvals */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro hrms-subsection-intro-dark">
                        <span className="hrms-subsection-label">Leave Request Approvals</span>
                        <p>Team Leads can approve, reject, or forward a leave request to the Manager if they need escalation. Two views available — table for quick scanning, cards for detailed review.</p>
                    </div>
                    <div className="hrms-screen-trio">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row hrms-screen-label-row-dark">
                                <span className="hrms-screen-pill hrms-screen-pill-dark">Leave Requests — Table View</span>
                            </div>
                            <div className="hrms-screen-frame hrms-screen-frame-dark">
                                <img src="/images/hrmsadmin-manager/leaverequeststable.png" alt="Leave Requests Table" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row hrms-screen-label-row-dark">
                                <span className="hrms-screen-pill hrms-screen-pill-dark">Leave Requests — Card View</span>
                            </div>
                            <div className="hrms-screen-frame hrms-screen-frame-dark">
                                <img src="/images/hrmsadmin-manager/leaverequestcard (2).png" alt="Leave Requests Card" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row hrms-screen-label-row-dark">
                                <span className="hrms-screen-pill hrms-screen-pill-dark">Rejected Leaves</span>
                            </div>
                            <div className="hrms-screen-frame hrms-screen-frame-dark">
                                <img src="/images/hrmsadmin-manager/rejectedleves.png" alt="Rejected Leaves" className="hrms-screen-img-full" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* ── 07 ADMIN SCREENS ── */}
            <section className="hrms-section hrms-white">
                <div className="hrms-inner">
                    <div className="hrms-section-label">07 — HR / Admin Screens</div>
                    <h2 className="hrms-heading">
                        HR Admin <span className="hrms-accent">Experience</span>
                    </h2>
                    <p className="hrms-body">
                        The Admin has full control of the system — adding employees, configuring roles, managing holidays, processing reimbursements, uploading payslips, and maintaining the asset register. Everything the company runs on.
                    </p>
                </div>

                {/* Admin Dashboard — full width */}
                <div className="hrms-screen-block">
                    <div className="hrms-screen-label-row">
                        <span className="hrms-screen-pill">Admin Dashboard</span>
                        <span className="hrms-screen-note">Full company overview — headcount, pending requests, attendance summary.</span>
                    </div>
                    <div className="hrms-screen-frame">
                        <img src="/images/hrmsadmin-manager/Admin dashboard.png" alt="Admin Dashboard" className="hrms-screen-img-full" />
                    </div>
                </div>

                {/* Employee Management */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro">
                        <span className="hrms-subsection-label">Employee Management</span>
                        <p>Add new employees with auto-generated login credentials. Manage the entire employee directory from one place.</p>
                    </div>
                    <div className="hrms-screen-pair">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Employee Directory</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/employeedirectory.png" alt="Employee Directory" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Add New Employee</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/addnewemployeeform.png" alt="Add Employee" className="hrms-screen-img-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reimbursements */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro">
                        <span className="hrms-subsection-label">Reimbursement Management</span>
                        <p>HR/Admin reviews, approves, and processes reimbursement payments. All requests in one place — no more WhatsApp chasing.</p>
                    </div>
                    <div className="hrms-screen-pair">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Pending Reimbursements</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/Reimbursementrequests.png" alt="Pending Reimbursements" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Approved Reimbursements</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/approvedreimbursementrequests.png" alt="Approved Reimbursements" className="hrms-screen-img-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Roles & Departments */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro">
                        <span className="hrms-subsection-label">Roles &amp; Departments</span>
                        <p>Admin creates roles and assigns module-level permissions using checkboxes. One codebase, infinite flexibility — no dev work needed to change who sees what.</p>
                    </div>
                    <div className="hrms-screen-pair">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Roles List</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/Roles.png" alt="Roles" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Add Role + Permissions</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/addnewroleform.png" alt="Add Role" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Departments</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/Departments.png" alt="Departments" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Add Department</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/Departmentform.png" alt="Add Department" className="hrms-screen-img-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Holidays */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro">
                        <span className="hrms-subsection-label">Holiday Management</span>
                        <p>Admin adds holidays once — every employee sees the updated calendar instantly. No more individual WhatsApp messages.</p>
                    </div>
                    <div className="hrms-screen-pair">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Holidays List</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/holidays.png" alt="Holidays" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Add Holiday</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/holidayform.png" alt="Add Holiday" className="hrms-screen-img-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Assets */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro">
                        <span className="hrms-subsection-label">Asset Management</span>
                        <p>All company assets tracked digitally — who has what, when it was assigned. No more spreadsheets.</p>
                    </div>
                    <div className="hrms-screen-pair">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Assets List</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/Assets-adding.png" alt="Assets" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Add Asset</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/assetaddingform.png" alt="Add Asset" className="hrms-screen-img-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payslip Requests — full width */}
                <div className="hrms-screen-block">
                    <div className="hrms-screen-label-row">
                        <span className="hrms-screen-pill">Manage Payslip Requests</span>
                    </div>
                    <div className="hrms-screen-frame">
                        <img src="/images/hrmsadmin-manager/Payslipsrequests.png" alt="Payslip Requests" className="hrms-screen-img-full" />
                    </div>
                </div>

                {/* Service Requests — full width */}
                <div className="hrms-screen-block">
                    <div className="hrms-screen-label-row">
                        <span className="hrms-screen-pill">Manage Service Requests</span>
                    </div>
                    <div className="hrms-screen-frame">
                        <img src="/images/hrmsadmin-manager/servicerequests.png" alt="Service Requests" className="hrms-screen-img-full" />
                    </div>
                </div>

                {/* Learnings Admin */}
                <div className="hrms-inner">
                    <div className="hrms-subsection-intro">
                        <span className="hrms-subsection-label">Learnings Management</span>
                    </div>
                    <div className="hrms-screen-pair">
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Learnings List</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/Roles (1).png" alt="Learnings Admin" className="hrms-screen-img-full" />
                            </div>
                        </div>
                        <div className="hrms-screen-pair-item">
                            <div className="hrms-screen-label-row">
                                <span className="hrms-screen-pill">Add Learning Resource</span>
                            </div>
                            <div className="hrms-screen-frame">
                                <img src="/images/hrmsadmin-manager/Learnigns form.png" alt="Add Learning" className="hrms-screen-img-full" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* ── 08 KEY DECISIONS ── */}
            <section className="hrms-section hrms-dark">
                <div className="hrms-inner">
                    <div className="hrms-section-label">08 — Key Design Decisions</div>
                    <h2 className="hrms-heading">
                        Why I designed <span className="hrms-accent">it this way</span>
                    </h2>

                    <div className="hrms-decisions">
                        {[
                            {
                                num: "01",
                                title: "Flat navigation — icon grid dashboard",
                                desc: "All services visible immediately on login. No nested menus, no learning curve. Any employee — from CEO to newest joiner — finds what they need in one click. Simple enough that no training was needed.",
                            },
                            {
                                num: "02",
                                title: "Show leave balance BEFORE the form",
                                desc: "Most systems let you fill the form and get rejected at the end. I designed the balance summary as the very first element — employees know their balance before they start filling. Eliminates confusion and repeated applications.",
                            },
                            {
                                num: "03",
                                title: "Auto half day rule — system enforced",
                                desc: "If an employee works less than 8.5 hours, the system automatically marks half day. No manual work, no subjectivity. Salary processing became significantly simpler — zero phone calls needed.",
                            },
                            {
                                num: "04",
                                title: "Role-based permission checkboxes",
                                desc: "One codebase, infinite flexibility. Admin creates roles and assigns module-level permissions using checkboxes. Every employee logs into the same app but sees only what their role permits. No development work needed to change permissions.",
                            },
                            {
                                num: "05",
                                title: "Forward to Manager — escalation built in",
                                desc: "Team Leads don't always have full context on every leave decision. Instead of forcing a binary approve/reject, I added a Forward to Manager option — so decisions get escalated rather than guessed.",
                            },
                            {
                                num: "06",
                                title: "Dual view for leave requests",
                                desc: "Managers can toggle between table view and card view for leave requests. Table for scanning quickly across many requests, cards for context-rich review with employee details front and center.",
                            },
                        ].map((d, i) => (
                            <div key={i} className="hrms-decision-card">
                                <span className="hrms-decision-num">{d.num}</span>
                                <div className="hrms-decision-content">
                                    <h4>{d.title}</h4>
                                    <p>{d.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 09 OUTCOME ── */}
            <section className="hrms-section hrms-white">
                <div className="hrms-inner">
                    <div className="hrms-section-label">09 — Outcome</div>
                    <h2 className="hrms-heading">
                        From problem <span className="hrms-accent">to live product.</span>
                    </h2>

                    <div className="hrms-outcome-list">
                        {[
                            "Leave application chaos eliminated — apply in 30 seconds, balance visible instantly",
                            "Attendance fully automated — auto half day rule enforced by system",
                            "Reimbursement delays eliminated — apply in app with receipt upload, no WhatsApp",
                            "Salary processor makes zero phone calls — all data in one place",
                            "Team Leads can approve, reject, or forward leave requests with full context",
                            "17 modules designed and shipped across all user roles",
                            "Live at allytedhrms.cloud — actively used by the entire Allyted Solutions team",
                        ].map((item, i) => (
                            <div key={i} className="hrms-outcome-item">
                                <span className="hrms-outcome-tick">✓</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="hrms-stats" style={{ marginTop: "48px" }}>
                        <div className="hrms-stat">
                            <span className="hrms-stat-num">17</span>
                            <span className="hrms-stat-label">Modules</span>
                        </div>
                        <div className="hrms-stat">
                            <span className="hrms-stat-num">3</span>
                            <span className="hrms-stat-label">User Roles</span>
                        </div>
                        <div className="hrms-stat">
                            <span className="hrms-stat-num">100<span className="hrms-stat-plus">%</span></span>
                            <span className="hrms-stat-label">Adoption</span>
                        </div>
                        <div className="hrms-stat">
                            <span className="hrms-stat-num">₹0</span>
                            <span className="hrms-stat-label">Vendor Cost</span>
                        </div>
                    </div>

                    <div className="hrms-live-link">
                        <a href="https://allytedhrms.cloud" target="_blank" rel="noreferrer" className="hrms-btn-primary">
                            View Live Site ↗
                        </a>
                        <Link to="/" className="hrms-btn-outline">← All Projects</Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HRMSDetail;