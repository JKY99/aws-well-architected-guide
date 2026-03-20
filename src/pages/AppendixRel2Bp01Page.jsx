import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel2Bp01Page() {
  return (
    <article className="doc-content">
      <h1>REL02-BP01 — 워크로드 공개 엔드포인트에 고가용성 네트워크 연결 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 수립하지 않으면 높은 수준의 위험이 노출됩니다.</p>
      </div>
      <p>
        공개 엔드포인트에 대한 고가용성 네트워크 연결을 계획, 구축, 운영하는 것이 중요합니다.
        연결 손실로 인해 워크로드에 도달할 수 없게 되면, 워크로드 자체가 실행 중이고 가용하더라도
        고객에게는 시스템이 다운된 것으로 보입니다. 워크로드 공개 엔드포인트에 대한 고가용성 및 복원력 있는
        네트워크 연결과 워크로드 자체의 복원력 있는 아키텍처를 결합하면 고객에게 최상의 가용성과 서비스 수준을
        제공할 수 있습니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        고가용성 및 복원력 있는 네트워크 연결 설계를 통해 워크로드가 사용자에게 액세스 가능하고 가용한 상태를 유지합니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>고가용성 워크로드를 설계하면서 고가용성을 위한 DNS 및 네트워크 연결을 계획하지 않음</li>
        <li>개별 인스턴스 또는 컨테이너에 공용 인터넷 주소를 사용하고 DNS로 연결 관리</li>
        <li>서비스 위치 지정에 도메인 이름 대신 IP 주소 사용</li>
        <li>공개 엔드포인트 연결이 손실되는 시나리오를 테스트하지 않음</li>
        <li>네트워크 처리량 요구 사항 및 분산 패턴을 분석하지 않음</li>
        <li>공개 엔드포인트에 대한 인터넷 네트워크 연결이 중단될 수 있는 시나리오를 테스트하고 계획하지 않음</li>
        <li>콘텐츠 전송 네트워크 없이 넓은 지리적 영역에 콘텐츠(웹 페이지, 정적 자산, 미디어 파일) 제공</li>
        <li>분산 서비스 거부(DDoS) 공격에 대한 계획 없음</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>고가용성 및 복원력 있는 네트워크 연결 설계를 통해 워크로드가 사용자에게 액세스 가능하고 가용한 상태 유지</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>고가용성 DNS 설정: Amazon Route 53을 고가용성 및 확장 가능한 DNS 서비스로 활용하여 사용자 요청을 AWS 또는 온프레미스에서 실행 중인 인터넷 애플리케이션으로 연결</li>
        <li>상태 확인 설정: Route 53 상태 확인을 생성하고 DNS 장애 조치 구성; 사용자 동작을 모방하도록 상태 확인 구성(웹 페이지 또는 특정 URL 요청)</li>
        <li>DNS 서비스와 엔드포인트 연결: Route 53을 사용하여 로드 밸런서 리전 엔드포인트를 가리키는 별칭 레코드 생성; Geo DNS 및 지연 시간 기반 라우팅 기능 고려</li>
        <li>콘텐츠 전송 네트워크 결정: CloudFront가 엣지 로케이션을 사용하여 콘텐츠를 전송하는 방법 이해; CloudFront 배포 설정 및 Origin Shield 고려</li>
        <li>애플리케이션 계층 보호 설정: AWS WAF를 사용하여 일반적인 웹 악용 및 봇으로부터 보호; 애플리케이션 계층 HTTP POST 및 GET 플러드에 대한 보호 구현</li>
        <li>추가 DDoS 보호 설정: AWS Shield Standard 활용(자동, 추가 비용 없음); 향상된 보호를 위해 AWS Shield Advanced 고려</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon Route 53</li>
        <li>Elastic Load Balancing (ELB)</li>
        <li>Amazon CloudFront</li>
        <li>AWS Global Accelerator</li>
        <li>Amazon API Gateway</li>
        <li>AWS WAF</li>
        <li>AWS Shield Standard 및 Advanced</li>
        <li>Amazon Application Recovery Controller (ARC)</li>
      </ul>
      <PageNav />
    </article>
  );
}
