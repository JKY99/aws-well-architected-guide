import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus6Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SUS06-BP03 — 워크로드를 최신 상태로 유지</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮은 수준입니다.</p>
      </div>

      <p>
        효율적인 기능을 채택하고 문제를 해결하며 워크로드의 전반적인 효율성을 개선하기 위해
        워크로드를 최신 상태로 유지합니다. 소프트웨어 및 운영 체제 업데이트에는 종종 성능 향상과
        에너지 효율 개선이 포함됩니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        워크로드의 모든 컴포넌트가 최신 상태로 유지되어 성능 개선, 보안 패치, 에너지 효율 향상을
        지속적으로 활용합니다. 자동화된 업데이트 프로세스를 통해 수동 작업 없이 최신 상태를 유지합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>소프트웨어 및 운영 체제 업데이트를 정기적으로 적용하지 않는 경우</li>
        <li>오래된 AMI 또는 컨테이너 이미지를 사용하는 경우</li>
        <li>Lambda 함수 런타임을 최신 버전으로 업데이트하지 않는 경우</li>
        <li>패치 관리 프로세스가 자동화되지 않은 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>최신 소프트웨어 버전의 성능 및 효율성 개선 활용</li>
        <li>보안 취약점 해결로 보안 태세 강화</li>
        <li>자동화된 업데이트로 운영 오버헤드 감소</li>
        <li>최신 런타임 및 라이브러리의 에너지 효율 향상 혜택</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>AWS Systems Manager를 사용하여 EC2 인스턴스 및 온프레미스 서버의 소프트웨어 인벤토리를 파악합니다.</li>
        <li>EC2 Image Builder를 사용하여 최신 패치가 적용된 AMI를 자동으로 빌드합니다.</li>
        <li>Amazon ECR을 활용하여 컨테이너 이미지를 최신 상태로 유지하고 취약점을 스캔합니다.</li>
        <li>AWS Lambda 함수의 런타임을 정기적으로 검토하고 최신 지원 버전으로 업데이트합니다.</li>
        <li>AWS Systems Manager Patch Manager를 사용하여 패치 적용을 자동화합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager — EC2 인스턴스 인벤토리 및 패치 관리</li>
        <li>EC2 Image Builder — 최신 패치 적용 AMI 자동 빌드</li>
        <li>Amazon ECR — 컨테이너 이미지 관리 및 취약점 스캔</li>
        <li>AWS Lambda — 런타임 버전 관리</li>
        <li>AWS Systems Manager Patch Manager — 자동화된 패치 관리</li>
      </ul>

      <PageNav />
    </article>
  );
}
