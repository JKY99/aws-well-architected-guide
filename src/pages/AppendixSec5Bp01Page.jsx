import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec5Bp01Page() {
  return (
    <article className="doc-content">
      <h1>SEC05-BP01 — 네트워크 계층 생성</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 네트워크 침해 시 피해가 전체 시스템으로 확산될 수 있습니다.</p>
      </div>
      <p>
        네트워크 계층은 워크로드의 자격 증명 인증 및 권한 부여 전략을 보완하는 심층 방어 접근 방식의 핵심 요소입니다. 데이터 민감도 및 접근 요구 사항에 따라 계층을 구성하고 적절한 트래픽 흐름 및 제어 메커니즘을 갖춥니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>데이터 민감도 및 접근 요구 사항에 따른 네트워크 계층 구성</li>
        <li>적절한 트래픽 흐름 및 제어 메커니즘 적용</li>
        <li>심층 방어 접근 방식을 보완하는 네트워크 계층화</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>단일 VPC 또는 서브넷에 모든 리소스를 생성</li>
        <li>데이터 민감도 요구 사항, 구성 요소 동작 또는 기능을 고려하지 않고 네트워크 계층 구성</li>
        <li>모든 네트워크 계층 고려 사항의 기본값으로 VPC와 서브넷만 사용하고 AWS 관리형 서비스가 토폴로지에 미치는 영향을 고려하지 않음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>중요 시스템 및 데이터로 이어지는 불필요한 경로 제한</li>
        <li>비인가 행위자가 네트워크 접근 및 추가 리소스로 이동하기 어렵게 함</li>
        <li>검사 시스템(침입 탐지, 악성코드 방지)의 분석 범위 축소</li>
        <li>오탐 및 불필요한 처리 오버헤드 감소</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>워크로드 아키텍처를 검토하고 기능, 데이터 민감도 및 동작을 기반으로 구성 요소를 논리적으로 그룹화합니다.</li>
        <li>인터넷 facing 구성 요소에는 로드 밸런서나 프록시를 사용하고, CloudFront, API Gateway, ALB, Amplify 등 관리형 서비스를 고려합니다.</li>
        <li>기능 그룹화에 따라 컴퓨팅 리소스(EC2, Fargate, Lambda)를 프라이빗 서브넷에 배포합니다.</li>
        <li>완전 관리형 AWS 서비스(DynamoDB, Kinesis, SQS)의 경우 프라이빗 IP 접근을 위해 VPC 엔드포인트를 기본으로 사용합니다.</li>
        <li>AWS Transit Gateway를 사용하여 여러 VPC 간 계층화된 네트워크 연결을 관리합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon VPC — 가상 프라이빗 클라우드 및 서브넷 관리</li>
        <li>Amazon CloudFront — 글로벌 콘텐츠 전송 및 엣지 보안</li>
        <li>Application Load Balancer — 인터넷 facing 트래픽 처리</li>
        <li>AWS PrivateLink — 서비스 간 프라이빗 연결</li>
        <li>Amazon API Gateway — API 관리 및 보호</li>
        <li>AWS Fargate — 컨테이너 컴퓨팅</li>
        <li>Amazon VPC Lattice — 서비스 간 네트워크 연결 단순화</li>
      </ul>
      <PageNav />
    </article>
  );
}
