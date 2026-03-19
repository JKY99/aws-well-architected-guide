import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec1Bp05Page() {
  return (
    <article className="doc-content">
      <h1>SEC01-BP05 — 보안 관리 범위 축소</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>AWS 관리형 서비스를 적극 활용하여 조직이 직접 관리해야 하는 보안 책임 범위를 줄입니다. 운영 체제, 미들웨어, 데이터베이스 패치 등 인프라 수준의 보안 관리를 AWS에 위임함으로써 팀은 애플리케이션 수준의 보안에 집중할 수 있습니다.</p>
      <h2>원하는 결과</h2>
      <p>가능한 경우 서버리스 또는 완전 관리형 서비스를 사용하여 인프라 패치, 취약점 관리, 구성 보안의 책임을 AWS와 분담합니다. 남은 보안 책임 범위는 명확히 문서화되어 관리됩니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>관리형 서비스 대신 EC2에 직접 소프트웨어를 설치하여 불필요한 패치 관리 부담 증가</li>
        <li>자체 관리 데이터베이스를 운영하여 DB 엔진 보안 패치 및 취약점 대응을 수동으로 처리</li>
        <li>컨테이너 기반 워크로드에서 Fargate 대신 EC2 노드를 직접 관리하여 OS 수준 보안 책임 증가</li>
        <li>공유 책임 모델을 정확히 이해하지 못해 AWS가 관리하는 영역에 중복 투자</li>
        <li>레거시 애플리케이션을 리프트앤시프트 방식으로 이전하여 관리형 서비스 전환 기회 상실</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>운영 부담 감소로 보안 팀이 고부가가치 보안 활동에 집중 가능</li>
        <li>AWS의 대규모 인프라 보안 투자로부터 자동으로 혜택을 받아 보안 수준 향상</li>
        <li>관리형 서비스의 내장 보안 기능(암호화, 자동 패치, 접근 제어) 활용으로 보안 기준선 상향</li>
        <li>인프라 관리 인력 및 도구 비용 절감과 동시에 보안 일관성 향상</li>
        <li>서버리스 아키텍처에서 공격 표면(attack surface) 대폭 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>새로운 워크로드 설계 시 관리형 서비스(RDS, Aurora, DynamoDB, ElastiCache)를 EC2 자체 설치 소프트웨어보다 우선 검토합니다.</li>
        <li>컨테이너 워크로드는 AWS Fargate를 사용하여 EC2 노드 관리 및 보안 패치 책임을 AWS에 위임합니다.</li>
        <li>AWS Lambda 또는 AWS App Runner를 활용하여 서버리스 아키텍처로 전환하고 OS 수준 공격 표면을 제거합니다.</li>
        <li>AWS 공유 책임 모델을 팀에 교육하고, 현재 사용 중인 서비스별 책임 분담 매트릭스를 작성합니다.</li>
        <li>기존 EC2 기반 워크로드에 대해 관리형 서비스 마이그레이션 로드맵을 수립하고 단계적으로 이전합니다.</li>
        <li>AWS Systems Manager를 사용하여 불가피하게 EC2를 사용하는 경우 패치 관리를 자동화합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Fargate — 서버리스 컨테이너 실행 환경, OS 관리 불필요</li>
        <li>AWS Lambda — 서버리스 함수 실행, 인프라 보안 책임 최소화</li>
        <li>Amazon RDS / Aurora — 완전 관리형 관계형 데이터베이스</li>
        <li>AWS Systems Manager Patch Manager — EC2 인스턴스 자동 패치 관리</li>
        <li>AWS App Runner — 컨테이너 애플리케이션 완전 관리형 실행</li>
      </ul>
      <PageNav />
    </article>
  );
}
