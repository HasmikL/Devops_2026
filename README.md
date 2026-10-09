# Restaurant DevOps Final Project

**Student:** Hasmik Levonyan

## Overview

This project documents a DevOps workflow for a restaurant web application. It covers source control, continuous integration and deployment, containerization, automated deployment, security testing, high availability, database backup and recovery, and monitoring.

The repository contains configuration examples, project documentation, security reports, and screenshots demonstrating the components that have been implemented and tested.

## Architecture

```text
Developer
   |
   v
Git Repository (GitLab)
   |
   v
Jenkins CI/CD
   |
   +--> Application Tests
   +--> Trivy Security Scan
   +--> OWASP ZAP Testing
   |
   v
Docker Image / Registry
   |
   v
Ansible Deployment
   |
   v
Restaurant Web Application
   |
   +--> HAProxy / Keepalived
   +--> PostgreSQL
   +--> Prometheus / Grafana
```

*The diagram represents the intended workflow. Individual components will be marked as implemented, tested, or planned based on verified evidence.*

## Repository Structure

| Directory | Purpose |
|---|---|
| `docs/` | Final project documentation |
| `app/` | Application files and Docker configuration |
| `jenkins/` | Jenkins pipeline configuration |
| `ansible/` | Automated deployment configuration |
| `haproxy/` | Load balancer configuration |
| `keepalived/` | High-availability configuration |
| `postgres/` | Database configuration and recovery procedures |
| `monitoring/` | Prometheus and Grafana configuration |
| `security-reports/` | Trivy scan reports |
| `zap-reports/` | OWASP ZAP reports |
| `evidence/screenshots/` | Screenshots and test evidence |

## Implementation Status

| Component | Status | Evidence |
|---|---|---|
| Git / GitLab | To be verified | `evidence/screenshots/` |
| Jenkins CI/CD | To be verified | `jenkins/` |
| Docker / Registry | To be verified | `app/` |
| Trivy / OWASP ZAP | To be verified | Security report folders |
| Ansible deployment | To be verified | `ansible/` |
| HAProxy / Keepalived | To be verified | Configuration folders |
| PostgreSQL backup / recovery | To be verified | `postgres/` |
| Prometheus / Grafana | To be verified | `monitoring/` |

## Verification Policy

Only components that have been implemented and supported by actual test results will be marked as completed. Example configurations and planned features will be clearly identified.

## Documentation

The final project report is available here: [Restaurant DevOps Final Project (PDF)](docs/Restaurant_DevOps_Final_Project_Hasmik_Levonyan.pdf).

## Security

Do not commit passwords, API tokens, private keys, personal data, or unredacted sensitive screenshots. Replace credentials in example configuration files with placeholders.

