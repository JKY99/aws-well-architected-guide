import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixOps2Bp05Page() {
  return (
    <article className="doc-content">
      <h1>OPS02-BP05 — 추가, 변경, 예외를 요청하는 메커니즘이 있음</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 노출되는 위험 수준이 중간입니다.</p>
      </div>

      <p>
        프로세스, 절차, 리소스의 소유자에게 추가, 변경, 예외를 요청할 수 있습니다.
        이러한 요청은 변경 관리 프로세스를 거칩니다.
        이점과 리스크를 평가한 후 실행 가능하고 적절하다고 판단되는 경우 요청을 승인하는 정보에 근거한 결정을 내립니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        지정된 소유권을 기반으로 프로세스, 절차, 리소스를 변경하도록 요청할 수 있습니다.
        변경은 이점과 리스크를 따져 신중한 방식으로 이루어집니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>애플리케이션을 배포하는 방식을 업데이트해야 하지만 운영 팀에 배포 프로세스 변경을 요청할 방법이 없는 경우</li>
        <li>재해 복구 계획을 업데이트해야 하지만 변경을 요청할 식별된 소유자가 없는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>요구 사항이 변함에 따라 프로세스, 절차, 리소스가 발전할 수 있습니다.</li>
        <li>소유자는 변경 시기를 결정할 때 정보에 근거한 결정을 내릴 수 있습니다.</li>
        <li>변경은 신중한 방식으로 이루어집니다.</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>워크로드의 프로세스, 절차, 리소스를 파악하고 지식 관리 시스템에 소유자를 문서화합니다.</li>
        <li>이해관계자와 협력하여 추가, 변경, 예외를 다루는 간단한 변경 관리 프로세스를 개발합니다.</li>
        <li>지식 관리 시스템에 변경 관리 프로세스를 문서화합니다.</li>
        <li>선행 조건으로 OPS02-BP01, OPS02-BP02, OPS02-BP03을 먼저 수립합니다.</li>
        <li>변경 관리 플랫폼으로 AWS Systems Manager Change Manager 사용을 고려합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager Change Manager</li>
        <li>관련 모범 사례: OPS02-BP01, OPS02-BP02, OPS02-BP03</li>
      </ul>

      <PageNav />
    </article>
  );
}
