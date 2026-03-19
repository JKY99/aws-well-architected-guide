import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec6Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC06-BP05 — 관리형 서비스 활용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        서버리스 컴퓨팅, 관리형 컨테이너 서비스 등 AWS 관리형 서비스를 활용하여 OS 패치, 인프라
        보안 설정 등 하위 레이어의 보안 책임을 AWS에 위임합니다. 이를 통해 개발 팀은 애플리케이션
        수준의 보안에 집중할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        가능한 경우 EC2 인스턴스 관리 대신 Lambda, Fargate, ECS/EKS 관리형 노드 그룹 등을 사용하여
        인프라 보안 운영 부담을 줄입니다. 팀은 OS 수준 패치나 인프라 보안 설정보다 애플리케이션
        로직과 코드 보안에 집중합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>관리형 서비스로 대체 가능한 워크로드에도 EC2를 사용하여 불필요한 운영 부담을 가짐</li>
        <li>관리형 서비스의 보안 설정(IAM 역할, 리소스 정책)을 기본값으로 방치함</li>
        <li>Lambda 함수에 과도한 IAM 권한을 부여하거나 환경 변수에 시크릿을 저장함</li>
        <li>Fargate를 사용하면서도 컨테이너 이미지의 취약점 스캔이나 서명을 생략함</li>
        <li>관리형 서비스 전환 후 불필요하게 남은 EC2 인스턴스를 정리하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>OS 수준 패치 및 인프라 보안 설정 부담을 AWS에 위임하여 운영 오버헤드 감소</li>
        <li>서버리스 환경에서 인프라 보안 취약점 노출 표면이 근본적으로 감소</li>
        <li>관리형 서비스의 내장 보안 기능(VPC 격리, IAM 통합 등)을 즉시 활용</li>
        <li>팀이 비즈니스 가치를 제공하는 애플리케이션 보안에 집중할 수 있음</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>상태 비저장(stateless) 워크로드는 AWS Lambda로 전환하여 OS 관리를 AWS에 위임하고, Lambda 함수에는 최소 권한 IAM 실행 역할을 적용합니다.</li>
        <li>컨테이너 워크로드는 EC2 노드 그룹 대신 AWS Fargate를 사용하여 EC2 인스턴스 보안 관리 부담을 없앱니다.</li>
        <li>EKS 관리형 노드 그룹을 사용하면 AWS가 노드 OS를 업데이트하고 패치하는 책임을 집니다.</li>
        <li>Lambda 환경 변수의 시크릿은 AWS Secrets Manager 또는 Systems Manager Parameter Store(SecureString)로 대체합니다.</li>
        <li>Amazon RDS, ElastiCache 등 관리형 데이터베이스 서비스를 사용하여 데이터베이스 OS 패치와 기본 보안 설정을 AWS에 위임합니다.</li>
        <li>관리형 서비스에서도 IAM 역할, 리소스 기반 정책, VPC 엔드포인트 등 애플리케이션 레이어 보안 설정은 직접 구성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Lambda — 서버리스 함수 실행, OS 관리 불필요</li>
        <li>AWS Fargate — 서버리스 컨테이너 실행 환경</li>
        <li>Amazon EKS 관리형 노드 그룹 — AWS가 노드 OS를 관리</li>
        <li>Amazon RDS — 관리형 관계형 데이터베이스, OS 패치 자동화</li>
        <li>AWS Secrets Manager — Lambda 및 컨테이너의 시크릿 안전 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
